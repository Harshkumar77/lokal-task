import axios from "axios"

const request = axios.create({
  headers: {
    // "X-Api-Key": "cdec4742d0034498a03e579e7f108da1",
    "X-Api-Key": "371f498fec564c5f83b1de06535ba0f0",
  },
})

const headlines = () =>
  request
    .get("//newsapi.org/v2/top-headlines?country=in")
    .then((_) =>
      _.data.articles
        .filter((_) => _.urlToImage && _.title && _.description)
        .slice(0, 10)
    )

export { headlines }
