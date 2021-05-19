const express = require("express");
const path = require("path");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec)

async function predictComplexity(input_text) {
	complexity = await exec("python3 compute.py \"" + input_text + "\"");
	complexity = complexity["stdout"].split("\r\n")[1].slice(0, 6);
	return complexity;
}

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/compute", async (req, res) => {
	input_text = req.url.replace("/compute?text=", "");
	complexity = await predictComplexity(input_text);
	res.send(complexity);
});

["/", "/home", "/expressions", "/text", "/presentation", "/paper", "/credits"].forEach(function (item, index) {
	app.get(item, (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
	});
});

app.listen(process.env.PORT || 80, () => console.log("Server running..."));