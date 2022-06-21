import { useQuery } from "react-query"
import { headlines } from "../utils/request"
import List from "./List"

export default function Home() {
  const { isLoading, error, data } = useQuery("headlines", headlines)

  if (isLoading) return <>Loading...</>
  if (error) return <>error</>

  console.log(data)
  return <List articles={data} />
}
