const express = require("express");
const app = express();

app.get("/", (req, res) =>
{
    res.send("Hello world");
})
app.get("/goodbye", (req, res) =>
{
    res.send("Bye world");
})

app.listen(3030, () =>
{
    console.log("Servidor corriendo en puerto 3030");
});

//* Usar para killear server: nodemon kill-port 3030