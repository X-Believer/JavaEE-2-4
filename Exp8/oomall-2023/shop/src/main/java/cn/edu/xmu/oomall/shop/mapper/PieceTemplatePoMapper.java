//School of Informatics Xiamen University, GPL-3.0 license

package cn.edu.xmu.oomall.shop.mapper;

import cn.edu.xmu.oomall.shop.mapper.po.PieceTemplatePo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PieceTemplatePoMapper extends MongoRepository<PieceTemplatePo, String> {
}
