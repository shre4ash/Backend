// const users = `{"name": "shreyash", "age":21, "gender": "male"}`

// //JSON.parse
// //JOSN.stringify

// const user = JSON.parse(users)
// console.log(user["gender"])


//JSON.parse
//JSON.Stingify

const user = {
    name: "Shreyash",
    gender: "male"
}

const finalString = JSON.stringify(user)
console.log(finalString)