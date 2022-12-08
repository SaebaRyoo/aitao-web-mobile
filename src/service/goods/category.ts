import request from '../../core/request';
// 获取全部分类数据
export async function findAll() {
  return request<API.Category[]>(`/api/category`, {
    method: 'get',
  });
}
