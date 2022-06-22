import axios from "axios"

const search = ({ queryKey: [_, q] }) =>
  axios
    .get("/api/search", {
      params: {
        q,
      },
    })
    .then((_) => _.data)

const headlines = ({ queryKey }) =>
  axios
    .get("/api/headlines", {
      params: {
        category: queryKey[1],
      },
    })
    .then((_) => _.data)

export { headlines, search }
