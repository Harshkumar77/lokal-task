import { useState } from "react"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { headlines } from "../utils/request"
import List from "./List"

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
]

export default function Home() {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  const [catg, setCatg] = useState("general")
  const { isLoading, error, data } = useQuery(["headlines", catg], headlines)
  const navigate = useNavigate()

  if (error) return <>error</>
  return (
    <>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter")
            navigate("/search", { state: { query: e.currentTarget.value } })
        }}
        type={"search"}
        className="w-1/2 p-3 border-2 rounded-lg mt-8 mb-4 justify-center"
      />
      <div className="relative select-none w-[15ch] bg-gray-100">
        <p className="border" onClick={() => setDropDownVisible((cur) => !cur)}>
          {catg}
        </p>
        {dropDownVisible && (
          <div className="absolute bg-gray-100  w-[15ch]">
            {categories.map((_) => (
              <p
                onClick={() => {
                  setCatg(_)
                  setDropDownVisible(false)
                }}
              >
                {_}
              </p>
            ))}
          </div>
        )}
      </div>
      {isLoading ? <>Loading...</> : <List articles={data} />}
    </>
  )
}
