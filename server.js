const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const content = "Awesome, I did it !!";
    const funnyGif = `https://media2.giphy.com/media/l3vRhg9I6CuGaqcjC/giphy.gif?cid=ecf05e47kg0t69o09hj8yhx6hz9w3in17r5r7x3dxrle7bkc&rid=giphy.gif&ct=g`;

    res.status(200).send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Success</title>
        <style>
          img {
            width: 250px;
            height: 200px;
          }
        </style>
      </head>
      <body>
        <h1>${content}</h1>
        <img src=${funnyGif} alt="funny" />
      </body>
    </html>
    `);
  } catch (error) {
    res.status(500).send(`Something went wrong !!`);
  }
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
