const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) =>
{
    res.send("Hello world");
})

app.listen(port, () =>
{
    console.log("Servidor corriendo en puerto http://localhost:" + port + "/");
});