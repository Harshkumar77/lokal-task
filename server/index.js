import axios from "axios"
import "dotenv/config"
import express from "express"

const app = express()
app.use(express.static("./dist"))

const request = axios.create({
  headers: {
    "X-Api-Key": process.env.KEY,
    Origin: "http://localhost:3000",
    Referer: "http://localhost:3000/",
  },
})

const filterResponse = (_) =>
  _.data.articles
    .filter(
      (_) =>
        _.urlToImage &&
        _.title &&
        _.description &&
        _.author &&
        _.content &&
        _.publishedAt
    )
    .slice(0, 10)

app.get("/api/search", async (req, res) => {
  res.json(
    await request
      .get("//newsapi.org/v2/everything", {
        params: {
          q: req.query.q,
        },
      })
      .then(filterResponse)
  )
})

app.get("/api/headlines", async (req, res) => {
  res.json(
    await request
      .get("//newsapi.org/v2/top-headlines", {
        params: {
          country: "in",
          category: req.query.category,
        },
      })
      .then(filterResponse)
  )
})

app.get("*", (req, res) => {
  res.sendFile("./dist/index.html")
})

app.listen(process.env.PORT, () => console.log("Server started"))
