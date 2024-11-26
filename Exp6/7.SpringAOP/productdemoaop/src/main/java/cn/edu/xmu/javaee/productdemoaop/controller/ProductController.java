package cn.edu.xmu.javaee.productdemoaop.controller;

import cn.edu.xmu.javaee.core.exception.BusinessException;
import cn.edu.xmu.javaee.core.model.ReturnObject;
import cn.edu.xmu.javaee.productdemoaop.controller.dto.ProductDto;
import cn.edu.xmu.javaee.productdemoaop.dao.bo.Product;
import cn.edu.xmu.javaee.productdemoaop.mapper.RedisUtil;
import cn.edu.xmu.javaee.productdemoaop.service.ProductService;
import cn.edu.xmu.javaee.productdemoaop.util.CloneFactory;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import static cn.edu.xmu.javaee.productdemo.util.Common.changeHttpStatus;

/**
 * 商品控制器
 * @author Ming Qiu
 */
@RestController /*Restful的Controller对象*/
@RequestMapping(value = "/products", produces = "application/json;charset=UTF-8")
public class ProductController {

    private final Logger logger = LoggerFactory.getLogger(ProductController.class);

    private ProductService productService;
    @Autowired
    private RedisUtil redisUtil;

    private final static String KEY = "Pr%d";

    /*public void build(Product bo) {
        bo.setDao(this);
    }*/

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /*@GetMapping("{id}")
    public ReturnObject getProductById(@PathVariable("id") Long id, @RequestParam(required = false, defaultValue = "auto") String type) {
        logger.debug("getProductById: id = {} " ,id);
        ReturnObject retObj = null;
        Product product = null;
        if (null != type && "manual" == type){
            product = productService.findProductById_manual(id);
        } else {
            product = productService.retrieveProductByID(id, true);
        }
        ProductDto productDto = CloneFactory.copy(new ProductDto(), product);
        retObj = new ReturnObject(productDto);
        return  retObj;
    }*/

    @GetMapping("{id}")
    public ReturnObject getProductById(@PathVariable("id") Long id, @RequestParam(required = false, defaultValue = "auto") String type) {
        logger.debug("getProductById: id = {}", id);
        ReturnObject retObj = null;
        Product product = null;
        if("redis".equals(type))
        {

            String key = String.format(KEY, id);
            product = (Product) redisUtil.get(key); // 使用 RedisUtil 的 get 方法

            if (Objects.isNull(product)) {
                logger.info("Cache MISS for product ID: {}", id);
                product = productService.retrieveProductByID(id, true);
                if (!Objects.isNull(product))
                    redisUtil.set(key, product, 3600);
            }
            else {
                logger.info("Cache HIT for product ID: {}", id);
            }
        }
        else {
            product = productService.retrieveProductByID(id, true);
        }

        // 将查询结果复制到 DTO 并缓存到 Redis
        ProductDto productDto = CloneFactory.copy(new ProductDto(), product);
        retObj = new ReturnObject(productDto);

        return retObj;
    }




    @GetMapping("")
    public ReturnObject searchProductByName(@RequestParam String name, @RequestParam(required = false, defaultValue = "auto") String type) {
        ReturnObject retObj = null;
        List<Product> productList = null;
        if ("manual".equals(type)){
            productList = productService.findProductByName_manual(name);
        } else if("auto".equals(type)){
            productList = productService.retrieveProductByName(name, true);
        }
        else{
            productList = productService.findProductByName_join(name);
        }
        List<ProductDto> data = productList.stream().map(o->CloneFactory.copy(new ProductDto(),o)).collect(Collectors.toList());
        retObj = new ReturnObject(data);
        return  retObj;
    }
}
