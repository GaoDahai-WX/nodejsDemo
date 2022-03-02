//引用 express 创建 app
const express = require("express")
const app = express()

// 引用body-parse 解析body
const bodyParser =require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置静态资源 中间件
app.use(express.static('./public'))

app.use("/",(req,res,next)=>{
    console.log("中间件")
    next()
})
//用于路由并配置路由 api路由
const apiRouter = require('./router/apiRouter')
app.use("/api",apiRouter)


// 启动服务 监听 8080端口
app.listen(8080,()=>{
    console.log("localhost:8080");
})