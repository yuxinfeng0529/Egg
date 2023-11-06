const Service = require('egg').Service

class userService extends Service {
    async getSer(name, age) {
        return {
            name,
            age,
            id: 999,
            arr: ['星期一', '星期二', '星期三', '星期四']
        }
    }
}

module.exports = userService