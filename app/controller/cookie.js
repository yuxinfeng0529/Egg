const Controller = require('egg').Controller

class cookieController extends Controller {
    //渲染cookies.html
    async viewindex() {
        const { ctx } = this;
        await ctx.render('cookies.html')
    }
    //增加cookie
    async addCookie() {
        const { ctx } = this;
        // ctx.cookies.set("username","hello",{
        // 	maxAge:1000*10//10s，设置这个键值对在浏览器的最长保存时间
        // })
        ctx.cookies.set("username", "人之初性本善", {
            //设置是否对 Cookie 进行加密，如果设置为 true，则在发送 Cookie 前会对这个键值对的值进行加密，客户端无法读取到 Cookie 的明文值。默认为 false。
            encrypt: true,
            maxAge: 24 * 3600 * 1000//设置这个键值对在浏览器的最长保存时间为一天
        })
        ctx.body = {
            status: 200,
            data: "添加成功"
        }
    }
    //删除cookie
    async delCookie() {
        const { ctx } = this;
        ctx.cookies.set("username", null)
        ctx.body = {
            status: 200,
            data: "删除成功"
        }
    }
    //查询cookie
    async queryCookie() {
        const { ctx } = this;
        const username = ctx.cookies.get("username")
        ctx.body = {
            status: 200,
            data: "查询成功",
            username
        }
    }
    //修改cookie
    async editCookie() {
        const { ctx } = this;
        ctx.cookies.set("username", "good")
        ctx.body = {
            status: 200,
            data: "修改成功",
        }
    }
}
module.exports = cookieController;