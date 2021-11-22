const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.json({
        message: `Hello, ${process.env.HOMETOWN}!`,
    })
})

app.listen(443, () => console.log("Server is listening on 443"))