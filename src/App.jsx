import { QueryClient } from "react-query"
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import Headlines from "./components/Headlines"

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Headlines />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
