import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Article() {
  const { urlToImage, title, description, url } = useLocation().state.article
  const navigate = useNavigate()
  return (
    <>
      <div className="mb-6 max-w-[800px] mx-auto">
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

        <h1 className="text-4xl text-center pt-5  font-semibold">{title}</h1>
        <img
          src={urlToImage}
          className="md:h-[25vw] py-4 mx-auto object-cover"
        />
        <p className="p-4">{description}</p>
        <a
          href={url}
          rel="noreferrer noopener"
          className="text-primary"
          target="_blank"
        >
          Read More ...
        </a>
      </div>
    </>
  )
}
