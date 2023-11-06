const Controller = require('egg').Controller;

class ejsController extends Controller {
    async index() {
        const { ctx } = this;
        const { name, age } = ctx.query;
        const data = await ctx.service.userser.getSer(name, age)
        //渲染
        await ctx.render('index.html', data)
    }
}
module.exports = ejsController;