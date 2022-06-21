import Card from "./Card"

export default function List({ articles }) {
  return (
    <div className="flex flex-wrap justify-around">
      {articles.map((article) => (
        <Card
          urlToImage={article.urlToImage}
          title={article.title}
          article={article}
        />
      ))}
    </div>
  )
}
