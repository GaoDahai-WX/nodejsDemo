// const { query } = require("express");
const express = require("express")

// 使用node内置中间件 Router
const router = express.Router();

//引用控制器方法
const {getUser,postUser,putUser,patchUser,deleteUser} =require("../controllers/user.js")

// user 查
router.get("/user",getUser)

// user 增
router.post("/user",postUser)

// user 改（覆盖）
router.put("/user",putUser)

// user 改（增量）
router.patch("/user",patchUser)

// user 删
router.delete("/user",deleteUser)



// // user 查
// router.get("/user",(req,res,next)=>{
//     res.send(req.query)
// })

// // user 增
// router.post("/user",(req,res,next)=>{
//     res.send(req.query)
// })

// // user 改（覆盖）
// router.put("/api",(req,res,next)=>{
//     res.send(req.body)
// })

// // user 改（增量）
// router.patch("/api",(req,res,next)=>{
//     res.send(req.body)
// })

// // user 删
// router.delete("/api",(req,res,next)=>{
//     res.send(req.body)
// })

module.exports = router