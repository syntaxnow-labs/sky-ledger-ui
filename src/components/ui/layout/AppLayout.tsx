import { Sidebar } from "lucide-react"
import { Header } from "./header"

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div>    
      <Sidebar/>
      </div>
    
    </div>
  )
}

export default AppLayout
