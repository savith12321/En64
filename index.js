const express = require("express");
const encode = require("./encode");
const decode = require("./decode");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.render('index.ejs')
})

app.get('/api', (req, res) =>{
    res.json({Hello: "World", routs: {encode: '/api/encode?query=Hello World!!', decode: "/api/decode?query=HOTDOG%20bot%20mat%20mat%20discord%20man%20GOOGLE%20discord%20python%20mat%20dog%20huh%20huh"}})
});

app.get('/api/encode', (req, res) =>{
    if(!req.query.query) return res.send({error: true, message: "missing query parameter", code: 400});
    var query = req.query.query;
    res.send({message: `${encode.encode(query)}`})
});

app.get('/api/decode', (req, res) =>{
    if(!req.query.query) return res.send({error: true, message: "missing query parameter", code: 400});
    var query = req.query.query;
    res.send({message: `${decode.decode(query)}`})
});

app.listen(port, () =>{
    console.log(`server is running on http://localhost:${port}`)
})
