import express from 'express'

const api=express();

api.get('/status',(req,res)=>{
    res.json({
        msg:"API en linea funcionando",
    });
})

export default api;