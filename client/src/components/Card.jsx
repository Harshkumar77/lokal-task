import { Link } from "react-router-dom"

export default function Card({ article, urlToImage, title, description }) {
  return (
    <Link
      to={{
        pathname: "/article",
      }}
      state={{ article: article }}
    >
      <div className="p-7 m-4 rounded-xl max-w-[600px] text-center bg-filler shadow-lg hover:scale-[1.05]">
        <img
          src={urlToImage}
          className="py-4 h-96 aspect-square object-cover mx-auto "
          loading="lazy"
        />
        <h1 className="shadow-md shadow-secondary text-lg font-semibold text-primary bg-white">
          {title}
        </h1>
      </div>
    </Link>
  )
}
