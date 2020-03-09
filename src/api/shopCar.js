import { $get, $post } from '@/libs/ajax.js';


// 获取全部数据
const $getAllCar = (data = {}) => {
    return $get(
        '/shoppingCar',
        Object.assign({}, data)
    )
}

// 获取单个数据
const $getOne = (data = {}) => {
    return $get(
        '/shoppingCar/getone',
        Object.assign({}, data)
    )
}

// 新增数据
const $add = (data) => {
    return $post(
        '/shoppingCar/add',
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
        '/shoppingCar/delete',
        Object.assign({}, data)
    )
}

// 更新数据
const $updata = (data) => {
    return $post(
        '/shoppingCar/update',
        Object.assign({},data),{
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

export {
    $getAllCar,
    $getOne,
    $add,
    $delete,
    $updata
}