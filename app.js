const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 4100

app.use(express.static(__dirname + "/public/"));
app.use(express.static(__dirname + "/views/"));

app.get("/", (req,res) =>
{
	res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () =>
{
	console.log(`ÀPP INICIANDO NA PORTA ${port}`);
});