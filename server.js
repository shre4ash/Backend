const express = require('express');
const path = require('path');

const app = express();

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get("/api/users", (res,req) => {
    res.json(users)
    const users = [{
        id: "123",
        name:"shreyash"
    }
,
{
    id:"1234",
    name:"nagesh"
}];


});


app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});