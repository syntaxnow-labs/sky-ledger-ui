import { LayoutDashboard } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r bg-white flex flex-col">
    
      <div className="h-16 flex items-center px-6 border-b">
        <span className="text-lg font-bold text-[#1E88E5]">
          Sidebar
        </span>
      </div>

     
      <nav className="flex-1 px-4 py-4 space-y-2">
        <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
          <LayoutDashboard size={18} />
          <span className="text-sm font-medium">Dashboard</span>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
