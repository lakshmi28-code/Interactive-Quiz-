const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/submit", (req, res) => {
    let score = 0

    if (req.body.q1 === "correct") score++
    if (req.body.q2 === "correct") score++
    if (req.body.q3 === "correct") score++

    res.send(`
        <h2>Quiz Result</h2>
        <p>Your Score: ${score} / 3</p>
        <a href="/">Try Again</a>
    `)
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})
