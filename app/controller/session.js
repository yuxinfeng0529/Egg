const Controller = require('egg').Controller;

class sessionController extends Controller {
    //添加session
    async addSession() {
        const { ctx } = this;
        ctx.session.username = 'Helloween'
        ctx.body = {
            status: 200
        }
    }
    //渲染session.html
    async sessionIndex() {
        const { ctx } = this;
        const username = ctx.session.username
        await ctx.render('session.html', {
            name: "hello",
            username
        })
    }
}
module.exports = sessionController;