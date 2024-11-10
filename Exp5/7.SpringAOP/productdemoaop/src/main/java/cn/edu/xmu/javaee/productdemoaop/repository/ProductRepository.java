package cn.edu.xmu.javaee.productdemoaop.repository;

import cn.edu.xmu.javaee.productdemoaop.mapper.generator.po.ProductPo;
import cn.edu.xmu.javaee.productdemoaop.mapper.manual.po.ProductAllPo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductPo, Long> {
   @Query(value = "select * from goods_product productPo " +
           "where productPo.goods_id = :goodsId"
           ,nativeQuery = true)
   List<ProductPo> getOtherProductList(@Param("goodsId") Long goodsId);

   @Query(value = "SELECT * FROM goods_product WHERE name = :name", nativeQuery = true)
   ProductPo findProductByName(@Param("name") String name);

}
