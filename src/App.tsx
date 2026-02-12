import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "@/components/ui/layout/AppLayout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
