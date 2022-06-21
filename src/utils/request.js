import axios from "axios"

const request = axios.create({
  headers: {
    // "X-Api-Key": "cdec4742d0034498a03e579e7f108da1",
    "X-Api-Key": "4896149b8e5e4a31ac156d4cf4959835",
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
