import { $get, $post } from '@/libs/ajax.js';


// 获取全部数据
const $getAllCat = (data = {}) => {
    return $get(
        '/category',
        Object.assign({}, data)
    )
}

// 获取单个数据
const $getOne = (data = {}) => {
    return $get(
        '/category/getone',
        Object.assign({}, data)
    )
}

// 新增数据
const $add = (data) => {
    return $post(
        '/category/add',
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
        '/category/delete',
        Object.assign({}, data)
    )
}

// 更新数据
const $updata = (data) => {
    return $post(
        '/category/update',
        Object.assign({},data),{
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

export {
    $getAllCat,
    $getOne,
    $add,
    $delete,
    $updata,
}
