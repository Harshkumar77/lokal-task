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
  const [catg, setCatg] = useState("general")
  const { isLoading, error, data } = useQuery(["headlines", catg], headlines)
  const navigate = useNavigate()

  if (error) return <>error</>
  return (
    <div>
      <div className="flex">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter")
              navigate("/search", {
                state: { query: e.currentTarget.value },
              })
          }}
          type={"search"}
          className="p-3 border-2 outline-none border-gray-400 rounded-lg mt-8 mb-4 grow mx-2 md:mx-[10vw] focus:border-gray-800"
          placeholder="Search for NEWS"
        />
      </div>
      <Dropdown setCatg={setCatg} catg={catg} />

      {isLoading ? <>Loading...</> : <List articles={data} />}
    </div>
  )
}

function Dropdown({ setCatg, catg }) {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  return (
    <div className="relative select-none w-[15ch] bg-gray-100">
      <p
        className="border p-4"
        onClick={() => setDropDownVisible((cur) => !cur)}
      >
        {catg}
      </p>
      {dropDownVisible && (
        <div className="absolute bg-gray-100  w-[15ch]">
          {categories.map((_) => (
            <p
              className="p-4 hover:bg-slate-300"
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
  )
}
