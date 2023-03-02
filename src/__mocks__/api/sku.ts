import { rest } from 'msw';

export const sku = [
  // mock sku
  rest.get('/api/sku', (req, res, ctx) => {
    ctx.status(200);
    ctx.json({
      success: true,
      code: 20000,
      message: '查询成功',
      data: [
        {
          id: '1148477873208696832',
          sn: '0608799f81c74c1aa0c6eaae42fd802a',
          name: 'TCL 测试掀暮涩  小影院  20英寸  165',
          price: 11,
          num: 200,
          alertNum: 9,
          image:
            'http://img10.360buyimg.com/n8/jfs/t1/71721/34/3065/124817/5d147ac3E049e04af/957ae2bddb710acd.jpg',
          images:
            'http://img13.360buyimg.com/n7/jfs/t1/47562/33/125/375477/5cd2c3bdE4164c44c/7c809fa28037ad16.jpg,http://img10.360buyimg.com/n8/jfs/t1/59268/34/3382/122779/5d1349eaEa1ff3003/0f26e3a1f142ba00.jpg,http://img13.360buyimg.com/n7/jfs/t1/47562/33/125/375477/5cd2c3bdE4164c44c/7c809fa28037ad16.jpg,http://img13.360buyimg.com/n7/jfs/t1/39124/14/10388/134846/5d1b2496E9e9b5b7c/374d96244d788873.jpg',
          weight: 1857,
          createTime: '2019-07-08T22:23:57.000+00:00',
          updateTime: '2019-07-08T22:23:57.000+00:00',
          spuId: 1148477873158365184,
          categoryId: 76,
          categoryName: '平板电视',
          brandName: 'TCL',
          spec: '{"电视音响效果":"小影院","电视屏幕尺寸":"20英寸","尺码":"165"}',
          saleNum: 83,
          commentNum: 6006,
          status: '1',
        },
      ],
    });
  }),
];
