import { useState } from "react"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { search } from "../utils/request"
import List from "./List"

export default function SearchResult() {
  const { query } = useLocation().state
  // const { searchQuery } = useParams()
  const [q, setQ] = useState(query)
  const { data, isLoading, error } = useQuery(["search", q], search)
  const navigate = useNavigate()

  if (error) return <>error</>
  return (
    <div className="mx-auto max-w-[800px]">
      <div className="flex">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter")
              navigate(`/search/${e.currentTarget.value}`, {
                state: { query: e.currentTarget.value },
              })
            setQ(e.currentTarget.value)
          }}
          type={"search"}
          className="p-3 border-2 outline-none border-gray-400 rounded-lg mt-8 mb-4 grow mx-2 focus:border-primary"
          placeholder="Search for NEWS"
        />
      </div>
      {isLoading ? <>Loading...</> : <List articles={data} />}
    </div>
  )
}
