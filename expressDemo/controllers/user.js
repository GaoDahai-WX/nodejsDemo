let getUser = (req,res,next)=>{
    res.send(req.query)
}

let postUser = (req,res,next)=>{
    res.send(req.body)
}

let putUser = (req,res,next)=>{
    res.send(req.body)
}

let patchUser = (req,res,next)=>{
    res.send(req.body)
}

let deleteUser = (req,res,next)=>{
    res.send(req.body)
}


module. exports  = {getUser,postUser,putUser,patchUser,deleteUser}