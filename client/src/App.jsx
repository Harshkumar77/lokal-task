import { QueryClient } from "react-query"
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Article from "./components/Article"
import Home from "./components/Home"
import SearchResult from "./components/SearchResult"

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
