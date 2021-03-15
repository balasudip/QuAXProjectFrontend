const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { exec } = require("child_process");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile("/Users/balasudip/Desktop/QuAXProject/Frontend/index.html");
});

app.post("/", async function (req, res) {
  console.log("--------- Dirname -----" + __dirname);
  console.log("Entered the shell section");

  const data = req.body.newItem;

  exec(
    `cd /home/balasudip/Desktop/QuaxProject/test/QuAX; sh run.sh "${data}"`,
    async (err, stdout, stderr) => {
      if (err) console.error(err);
      console.log(stdout);
      exec("python3 csv_to_html.py", (err, stdout, stderr) => {
        console.log(stdout);
        res.sendFile(
          "/Users/balasudip/Desktop/QuAXProject/Frontend/search.html"
        );
        console.log(":: End game ::");
      });
    }
  );
});

app.get("/output", function (req, res) {
  res.sendFile(__dirname + "/output.html");
});

app.listen(4500, function () {
  console.log("Server starting at port 4500...");
});
