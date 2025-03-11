import { BrowserRouter, Routes, Route } from "react-router-dom"
import PagePagamento from "./pages/pagamento"
import PageCartoes from "./pages/cartoes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Login</p>} />
        <Route path="/pagamento" element={<PagePagamento />} />
        <Route path="/cartoes" element={<PageCartoes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
