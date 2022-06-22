import { useState } from "react"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { headlines } from "../utils/request"
import List from "./List"
import Loading from "./Loading"

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
    <div className="max-w-[800px] mx-auto">
      <div className="flex">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter")
              navigate(`/search/${e.currentTarget.value}`, {
                state: { query: e.currentTarget.value },
              })
          }}
          type={"search"}
          className="p-3 border-2 outline-none border-gray-400 rounded-lg mt-8 mb-4 grow mx-2 focus:border-primary"
          placeholder="Search for NEWS"
        />
      </div>
      <Dropdown setCatg={setCatg} catg={catg} />

      {isLoading ? <Loading /> : <List articles={data} />}
    </div>
  )
}

function Dropdown({ setCatg, catg }) {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  return (
    <div className="flex justify-center my-3">
      <p className="text-primary font-bold self-center mr-1 text-sm">
        What matter's to you ?
      </p>
      <div
        onMouseLeave={() => {
          setDropDownVisible(false)
        }}
        className="rounded cursor-pointer text-center relative select-none w-[17ch] bg-filler"
      >
        <p className="p-1" onClick={() => setDropDownVisible((cur) => !cur)}>
          {catg}
        </p>
        {dropDownVisible && (
          <div className="absolute bg-filler  w-[17ch]">
            {categories.map((_) => (
              <p
                className="p-1 hover:bg-secondary"
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
    </div>
  )
}
