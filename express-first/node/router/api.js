const express=require('express');
const router=express.Router();

router.get('/user/register',(req,res,next)=>{

	next();
});

module.exports=router;