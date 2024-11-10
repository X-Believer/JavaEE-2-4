package cn.edu.xmu.javaee.productdemoaop.repository;

import cn.edu.xmu.javaee.productdemoaop.mapper.generator.po.OnSalePo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SaleRepository extends JpaRepository<OnSalePo, Long> {
    @Query(value = "select * " +
            "from goods_onsale onsaleList " +
            "where onsaleList.product_id =:id and onsaleList.begin_time <= CURRENT_TIMESTAMP AND onsaleList.end_time > CURRENT_TIMESTAMP"
            ,nativeQuery = true)
    List<OnSalePo> getOnsaleList(@Param("id") Long id);
}
