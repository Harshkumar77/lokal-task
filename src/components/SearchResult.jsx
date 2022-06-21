import { useState } from "react"
import { useQuery } from "react-query"
import { useLocation } from "react-router-dom"
import { search } from "../utils/request"
import List from "./List"

export default function SearchResult() {
  const { query } = useLocation().state
  const [q, setQ] = useState(query)
  const { data, isLoading, error } = useQuery(["search", q], search)

  if (error) return <>error</>
  return (
    <>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") setQ(e.currentTarget.value)
        }}
        type={"search"}
        className="w-1/2 p-3 border-2 rounded-lg mt-8 mb-4 justify-center"
      />
      {isLoading ? <>Loading...</> : <List articles={data} />}
    </>
  )
}
