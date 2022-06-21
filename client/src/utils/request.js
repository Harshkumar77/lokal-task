import axios from "axios"

const request = axios.create({
  headers: {
    "X-Api-Key": "cdec4742d0034498a03e579e7f108da1",
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

const search = ({ queryKey: [_, q] }) =>
  request
    .get("//newsapi.org/v2/everything", {
      params: {
        q,
      },
    })
    .then(filterResponse)

const headlines = ({ queryKey }) =>
  request
    .get("//newsapi.org/v2/top-headlines", {
      params: {
        country: "in",
        category: queryKey[1],
      },
    })
    .then(filterResponse)

export { headlines, search }
