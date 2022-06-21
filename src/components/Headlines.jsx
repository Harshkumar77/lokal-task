import { useQuery } from "react-query"
import { headlines } from "../utils/request"
import HeadLineCard from "./HeadLineCard"

export default function Headlines() {
  const { isLoading, error, data } = useQuery("headlines", headlines)

  if (isLoading) return <>Loading...</>
  if (error) return <>error</>

  console.log(data)
  return (
    <div className="flex flex-wrap justify-around">
      {data.map((article) => (
        <HeadLineCard
          urlToImage={article.urlToImage}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  )
}
