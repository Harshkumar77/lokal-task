import { Link } from "react-router-dom"

export default function Card({ article, urlToImage, title, description }) {
  return (
    <Link
      to={{
        pathname: "/article",
      }}
      state={{ article: article }}
    >
      <div className="px-3 m-3 rounded-xl border-2 border-gray-700 max-w-[400px] text-center bg-blue-50">
        <img
          src={urlToImage}
          className="py-4 h-64 aspect-square object-cover mx-auto"
        />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </Link>
  )
}
