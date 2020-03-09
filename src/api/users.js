import { $get, $post } from '@/libs/ajax.js';


// 获取全部数据
const $getAll = (data = {}) => {
    return $get(
        '/users',
        Object.assign({}, data)
    )
}

// 获取单个数据
const $getOne = (data = {}) => {
    return $get(
        '/users/getone',
        Object.assign({}, data)
    )
}
// 获取单个数据
const $login = (data = {}) => {
    return $post(
        '/users/login',
        Object.assign({},data),{
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

// 新增数据
const $add = (data) => {
    return $post(
        '/users/add',
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
        '/users/delete',
        Object.assign({}, data)
    )
}

// 更新数据
const $updata = (data) => {
    return $post(
        '/users/update',
        data,
        {
            FormData: true
        }
    )
}

export {
    $getAll,
    $getOne,
    $login,
    $add,
    $delete,
    $updata,
}
