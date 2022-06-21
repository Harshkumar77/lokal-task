import { useLocation } from "react-router-dom"

export default function Article() {
  const { urlToImage, title, description } = useLocation().state.article
  return (
    <div className="px-3 m-3 rounded-xl mx-auto border-2 border-gray-700 max-w-[700px] text-center bg-blue-50">
      <img src={urlToImage} className="py-4 mx-auto" />
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="p-4">{description}</p>
    </div>
  )
}
