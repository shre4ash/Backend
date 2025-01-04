// creating  an http server 
// express
// node defult liabrary => no


//# Find the process ID (PID) using port 3000
//Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess

//# Kill the process using the PID
//Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

const express = require('express');

const app = express();

const users = [{
    name : "ramesh",
    kidneys : [{
        healthy : true
        
       
    }]
}]

app.use(express.json());

// function sum(n){
//     let ans = 0;
//     for(let i = 1; i <= n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }

app.get("/", function (req,res){
    // const n = req.query.n;
    // const ans = sum(n);
    // res.send("hi shreyash your answer is" + ans);

const rameshKidneys = users[0].kidneys;
const numberOfKidneys = rameshKidneys.length;
let numberOfHealthyKidneys = 0;
for (let i = 0; i < rameshKidneys.length; i++){
    if (rameshKidneys[i].healthy){
        numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
}
const numberOfUnhelthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
res. json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhelthyKidneys
})

app.post("/",function(req,res){
 const isHealthy = req.body.isHealthy;
   users[0].kidneys.push({
         healthy : isHealthy
   })
   res.json({
       msg: "Done"
   })
})

// app.put("/", function(req, res){
//     for(let i = 0; i < users[0].kidneys.length; i++){
//         users[0].kidneys[i].healthy = true;
//     }
//     res.json({});
// } )

// Removing all the unhelthy kidnies
app.delete("/", function(req, res){
    //you should return a 411 stastus code
    if(isThereAtleastOneHealthyKidneys()){
    const newKidneys = [];
    for (let i = 0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys - newKidneys;
    res.json({msg:"done"})
    }else{
        res.status(411).json({
            messg:"You have no bad kidneys"
        })
    }
})


})
function isThereAtleastOneHealthyKidneys(){
    let isThereAtleastOneHealthyKidneys = false;
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            isThereAtleastOneHealthyKidneys = true;
        }
    }
    return isThereAtleastOneHealthyKidneys
}

app.listen(3000);
