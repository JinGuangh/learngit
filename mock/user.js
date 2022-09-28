// 创建假数据 mockjs库来完成生成
var Mock = require('mockjs')

module.exports = () => {

    // let data = []
    // for (let i = 1; i <= 100; i++) {
    //   data.push({ id: i, name: '张三=' + i })
    // }

    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'users|10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            username: '@first',
            truename: '@cname(true)',
            // 在数组中选一个
            'sex|1': ['男', '女'],
            avatar: `@image('100x200', '#f00', '#FFF', 'mock')`
        }]
    })

    return {
        user: data
    }
}


