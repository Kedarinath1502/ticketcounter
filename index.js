const express = require("express")
const app = express();
function isoldenough(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "you are not yet age"
        })
    }
}
app.use(isoldenough)
app.get("/ride2", (req, res, next) => {
    res.json({
        msg: "your ticket has been booked for the ride 2"
    })

})
app.get("/ride1", (req, res, next) => {
    res.json({
        msg: "your ticket has been booked for the ride 1"
    })
})
app.listen(3001)