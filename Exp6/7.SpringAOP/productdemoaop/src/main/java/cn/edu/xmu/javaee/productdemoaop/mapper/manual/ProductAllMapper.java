//School of Informatics Xiamen University, GPL-3.0 license

package cn.edu.xmu.javaee.productdemoaop.mapper.manual;

import cn.edu.xmu.javaee.productdemoaop.mapper.generator.ProductPoSqlProvider;
import cn.edu.xmu.javaee.productdemoaop.mapper.generator.po.OnSalePo;
import cn.edu.xmu.javaee.productdemoaop.mapper.generator.po.ProductPo;
import cn.edu.xmu.javaee.productdemoaop.mapper.generator.po.ProductPoExample;
import cn.edu.xmu.javaee.productdemoaop.mapper.manual.po.ProductAllPo;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

@Mapper
public interface ProductAllMapper {

    @SelectProvider(type=ProductPoSqlProvider.class, method="selectByExample")
    @Results({
            @Result(column="id", property="id", jdbcType=JdbcType.BIGINT, id=true),
            @Result(column="sku_sn", property="skuSn", jdbcType=JdbcType.VARCHAR),
            @Result(column="name", property="name", jdbcType=JdbcType.VARCHAR),
            @Result(column="original_price", property="originalPrice", jdbcType=JdbcType.BIGINT),
            @Result(column="weight", property="weight", jdbcType=JdbcType.BIGINT),
            @Result(column="barcode", property="barcode", jdbcType=JdbcType.VARCHAR),
            @Result(column="unit", property="unit", jdbcType=JdbcType.VARCHAR),
            @Result(column="origin_place", property="originPlace", jdbcType=JdbcType.VARCHAR),
            @Result(column="commission_ratio", property="commissionRatio", jdbcType=JdbcType.INTEGER),
            @Result(column="free_threshold", property="freeThreshold", jdbcType=JdbcType.BIGINT),
            @Result(column="status", property="status", jdbcType=JdbcType.SMALLINT),
            @Result(column="creator_id", property="creatorId", jdbcType=JdbcType.BIGINT),
            @Result(column="creator_name", property="creatorName", jdbcType=JdbcType.VARCHAR),
            @Result(column="modifier_id", property="modifierId", jdbcType=JdbcType.BIGINT),
            @Result(column="modifier_name", property="modifierName", jdbcType=JdbcType.VARCHAR),
            @Result(column="gmt_create", property="gmtCreate", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="gmt_modified", property="gmtModified", jdbcType=JdbcType.TIMESTAMP),
            @Result(property =  "onSaleList", javaType = List.class, many =@Many(select="selectLastOnSaleByProductId"), column = "id"),
            @Result(property =  "otherProduct", javaType = List.class, many =@Many(select="selectOtherProduct"), column = "goods_id")
    })
    List<ProductAllPo> getProductWithAll(ProductPoExample example);



    @Select({
            "select",
            "`id`, `product_id`, `price`, `begin_time`, `end_time`, `quantity`, `max_quantity`, `creator_id`, ",
            "`creator_name`, `modifier_id`, `modifier_name`, `gmt_create`, `gmt_modified`",
            "from goods_onsale",
            "where `product_id` = #{productId,jdbcType=BIGINT} and `begin_time` <= NOW() and `end_time` > NOW()"
    })
    @Results({
            @Result(column="id", property="id", jdbcType=JdbcType.BIGINT, id=true),
            @Result(column="product_id", property="productId", jdbcType=JdbcType.BIGINT),
            @Result(column="price", property="price", jdbcType=JdbcType.BIGINT),
            @Result(column="begin_time", property="beginTime", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="end_time", property="endTime", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="quantity", property="quantity", jdbcType=JdbcType.INTEGER),
            @Result(column="max_quantity", property="maxQuantity", jdbcType=JdbcType.INTEGER),
            @Result(column="creator_id", property="creatorId", jdbcType=JdbcType.BIGINT),
            @Result(column="creator_name", property="creatorName", jdbcType=JdbcType.VARCHAR),
            @Result(column="modifier_id", property="modifierId", jdbcType=JdbcType.BIGINT),
            @Result(column="modifier_name", property="modifierName", jdbcType=JdbcType.VARCHAR),
            @Result(column="gmt_create", property="gmtCreate", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="gmt_modified", property="gmtModified", jdbcType=JdbcType.TIMESTAMP)
    })
    List<OnSalePo> selectLastOnSaleByProductId(Long productId);

    @Select({
            "select",
            "`id`, `goods_id`, `sku_sn`, `name`, `original_price`, `weight`, ",
            "`barcode`, `unit`, `origin_place`, `creator_id`, `creator_name`, `modifier_id`, ",
            "`modifier_name`, `gmt_create`, `gmt_modified`",
            "from goods_product",
            "where `goods_id` = #{goodsId,jdbcType=BIGINT}"
    })

    @Results({
            @Result(column="id", property="id", jdbcType=JdbcType.BIGINT, id=true),
            @Result(column="sku_sn", property="skuSn", jdbcType=JdbcType.VARCHAR),
            @Result(column="name", property="name", jdbcType=JdbcType.VARCHAR),
            @Result(column="original_price", property="originalPrice", jdbcType=JdbcType.BIGINT),
            @Result(column="weight", property="weight", jdbcType=JdbcType.BIGINT),
            @Result(column="barcode", property="barcode", jdbcType=JdbcType.VARCHAR),
            @Result(column="unit", property="unit", jdbcType=JdbcType.VARCHAR),
            @Result(column="origin_place", property="originPlace", jdbcType=JdbcType.VARCHAR),
            @Result(column="creator_id", property="creatorId", jdbcType=JdbcType.BIGINT),
            @Result(column="creator_name", property="creatorName", jdbcType=JdbcType.VARCHAR),
            @Result(column="modifier_id", property="modifierId", jdbcType=JdbcType.BIGINT),
            @Result(column="modifier_name", property="modifierName", jdbcType=JdbcType.VARCHAR),
            @Result(column="gmt_create", property="gmtCreate", jdbcType=JdbcType.TIMESTAMP),
            @Result(column="gmt_modified", property="gmtModified", jdbcType=JdbcType.TIMESTAMP)
    })
    ProductPo selectOtherProduct(Long goodsId);

    @Select({
            "SELECT gp.`id` AS product_id, gp.`shop_id`, gp.`goods_id`, gp.`category_id`, gp.`template_id`, " +
                    "gp.`sku_sn`, gp.`name`, gp.`original_price`, gp.`weight`, gp.`barcode`, " +
                    "gp.`unit`, gp.`origin_place`, gp.`creator_id`, gp.`creator_name`, " +
                    "gp.`modifier_id`, gp.`modifier_name`, gp.`gmt_create`, gp.`gmt_modified`, " +
                    "gp.`status`, gp.`commission_ratio`, gp.`shop_logistic_id`, gp.`free_threshold`, " +
                    "gos.`id` AS sale_id, gos.`price`, gos.`begin_time`, gos.`end_time`, " +
                    "gos.`quantity`, gos.`max_quantity`, gos.`creator_id` AS sale_creator_id, " +
                    "gos.`creator_name` AS sale_creator_name, gos.`modifier_id` AS sale_modifier_id, " +
                    "gos.`modifier_name` AS sale_modifier_name, gos.`gmt_create` AS sale_gmt_create, " +
                    "gos.`gmt_modified` AS sale_gmt_modified, " +
                    "gpr.`id` AS related_product_id, gpr.`sku_sn` AS related_sku_sn, gpr.`name` AS related_name, " +
                    "gpr.`original_price` AS related_original_price, gpr.`weight` AS related_weight " +
                    "FROM goods_product gp " +
                    "LEFT OUTER JOIN goods_onsale gos ON gp.`id` = gos.`product_id` " +
                    "AND gos.`begin_time` <= NOW() AND gos.`end_time` > NOW() " +
                    "LEFT OUTER JOIN goods_product gpr ON gp.`goods_id` = gpr.`goods_id` AND gp.`id` <> gpr.`id` " +
                    "WHERE gp.`name` = #{productName}"
    })
    @ResultMap("ProductAllMapper_join")
    List<ProductAllPo> getProductWithAll_join(String productName);

}
