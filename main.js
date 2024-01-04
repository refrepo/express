const express = require('./index')

const app = express()

console.log(app.set("case sensitive routing"))
console.log(app.set("strict routing"))

app.get('*', function(req, res, next) {
    res.end("hello world")
})

app.listen("20000")
