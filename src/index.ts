import express from "express"
const app = express()

app.get('/semesters', function (req, res) {


    res.send({});

})

app.listen(8080)