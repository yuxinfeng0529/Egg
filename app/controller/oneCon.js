// 'use strict';

// const { Controller } = require('egg');

const Controller=require('egg').Controller

class oneController extends Controller {
    async demoone() {
        const { ctx } = this;
        ctx.body = '前端工程师';
    }

    // get自由传参
    async getCat(){
        const { ctx } = this;
        ctx.body = ctx.query;
    }

    // get严格传参
    async getstrict(){
        const { ctx } = this;
        // 写法一
        // ctx.body = "大家好,我是:"+ctx.query.name+",今年"+ctx.query.age+"岁"
        // 写法二
        const {name,age}=ctx.params;
        ctx.body={
            name,age
        }
    }

    // service
    async getSer() {
        const { ctx } = this;
        const { name, age } = ctx.query;
        const data = await ctx.service.userSer.getSer(name, age);
        ctx.body = data;
    }
}

module.exports = oneController