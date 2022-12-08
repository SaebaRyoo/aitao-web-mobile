declare namespace API {
  // 分类商品类型
  type Category = {
    id: number;
    name?: string;
    goodsNum?: number;
    isShow?: string; // 是否显示
    isMenu?: string; // 是否导航
    seq?: number; // 排序
    parentId: number;
    templateId?: number; // 模板id
  };
}
