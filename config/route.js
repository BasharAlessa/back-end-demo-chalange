const express= require("express")
const route = express.Router()
const postConrtoller = require ("../controller/postController")


route.get("/",postConrtoller.homePage)
route.get("/new/article" ,postConrtoller.createNewPostPage)
route.post("/submit-new-post" ,postConrtoller.submitNewPost)
route.get("/article/:id" , postConrtoller.openEditPage)
route.post("/submit-edit/:id" , postConrtoller.submitEditPost) 
route.get("/delete-post/:id" ,postConrtoller.deletepost)


module.exports=route