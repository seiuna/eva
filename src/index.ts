import * as express from "express";
import {CourseScheduling, searchTeacherByid, Teacher, TeacherTest} from "./db";
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(bodyParser.json());
app.use(cors());
app.post('/api/getTeacherTests', async function (req, res) {
    if(req.body.userid){
      const data= await TeacherTest.findAll({
            where: {
                userid: req.body.userid,
            },
            include: [
                {
                    model: Teacher,
                },
                {
                    model: CourseScheduling,
                },
            ],
        }).then((results) => {
         return results.map((v)=>{
             return Object.assign(v.dataValues)
         });
        })
        res.send({message:"success",status:"1",context:data})
        return;
    }
    res.send({message:"用户不存在",status:"0",context:""})
})


app.post('/api/getTeacherTests', async function (req, res) {
    if(req.body.userid){
        const data= await TeacherTest.findAll({
            where: {
                userid: req.body.userid,
            },
            include: [
                {
                    model: Teacher,
                },
                {
                    model: CourseScheduling,
                },
            ],
        }).then((results) => {
            return results.map((v)=>{
                return Object.assign(v.dataValues)
            });
        })
        res.send({message:"success",status:"1",context:data})
        return;
    }
    res.send({message:"用户不存在",status:"0",context:""})
})

app.post('/api/login', async function (req, res) {
    if(req.body.teacherid){
       const data= await searchTeacherByid(2005089).then((d)=>{
           return d;
        })
        res.send({message:"success",status:"0",context: data})
    }
    if(req.body.studentid){

    }
    if(req.body.userid){

    }
    res.send({message:"用户不存在",status:"0",context:""})
})

app.listen(8080)