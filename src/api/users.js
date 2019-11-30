import { $get, $post } from '@/libs/ajax.js';


// 获取全部数据
const $getAll = (data = {}) => {
    return $get(
        '/api/users',
        Object.assign({}, data)
    )
}

// 获取单个数据
const $getOne = (data = {}) => {
    return $get(
        '/api/users/getone',
        Object.assign({}, data)
    )
}

// 新增数据
const $add = (data) => {
    return $post(
        '/api/users/add',
        Object.assign({},data),{
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}
// 删除单个数据
const $delete = (data = {}) => {
    return $get(
        '/api/users/delete',
        Object.assign({}, data)
    )
}

// 更新数据
const $updata = (data) => {
    return $post(
        '/api/users/update',
        Object.assign({},data),{
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

export {
    $getAll,
    $getOne,
    $add,
    $delete,
    $updata,
}