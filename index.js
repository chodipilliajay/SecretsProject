//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var passW = "";
var isCorrect = false;


function PassChecker(req, res, next){
    passW = req.body["password"];
    if (passW === "ILoveMySelf"){
        isCorrect = true;
    }
    console.log(passW);
    next();
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(PassChecker);

app.get("/", (req, res)=>{
    res.sendFile("C:/Users/havef/Videos/Anglea Course/Backend/3.5 Secrets Project/public/index.html")
})

app.post("/check", (req, res)=>{
    if (isCorrect){
         res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.sendFile("C:/Users/havef/Videos/Anglea Course/Backend/3.5 Secrets Project/public/index.html")
    }
})

app.listen(port, (req, res)=>{
    console.log("the server is successfully rinning at the port "+port);
})