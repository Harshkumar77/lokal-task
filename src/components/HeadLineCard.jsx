export default function HeadLineCard({ urlToImage, title, description }) {
  return (
    <div className="px-3 m-3 rounded-xl border-2 border-gray-700 max-w-[400px] text-center bg-gray-50">
      <img
        src={urlToImage}
        className="py-4 h-64 aspect-square object-cover mx-auto"
      />
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="p-4">{description}</p>
    </div>
  )
}
