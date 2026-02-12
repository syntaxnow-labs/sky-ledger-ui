import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import {
  LayoutDashboard,
  FileText,
  Receipt,
  CreditCard,
  Boxes,
  Warehouse,
  Users,
  Wallet,
  Settings,
  Search,
  Moon,
  Sun,
  Menu
} from "lucide-react"
import { motion } from "framer-motion"

const menuItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Quotations", icon: FileText, path: "quotations" },
  { name: "Invoices", icon: Receipt, path: "invoices" },
  { name: "Credit Notes", icon: CreditCard, path: "credit-notes" },
  { name: "Catalog", icon: Boxes, path: "catalog" },
  { name: "Inventory", icon: Warehouse, path: "inventory" },
  { name: "Clients", icon: Users, path: "clients" },
  { name: "Expenses", icon: Wallet, path: "expenses" },
  { name: "Settings", icon: Settings, path: "settings" }
]

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDark = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="flex min-h-screen bg-muted/40 dark:bg-background transition-colors duration-300">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : 0 }}
        className={`fixed md:static z-40 h-full w-64 bg-background border-r flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 text-xl font-semibold tracking-tight flex items-center justify-between">
          <div>
            <span className="text-primary"></span> Syntaxnow
            <div className="text-sm text-muted-foreground">Invoicing</div>
          </div>
        </div>

        <ScrollArea className="flex-1 px-3">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start gap-3 rounded-2xl"
                  asChild
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 w-full ${isActive ? "text-primary font-medium" : ""}`
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </NavLink>
                </Button>
              )
            })}
          </div>
        </ScrollArea>
      </motion.aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col md:ml-0">
        {/* Header */}
        <header className="h-20 border-b bg-background flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Dashboard
              </h1>
              <p className="text-muted-foreground text-xs md:text-sm">
                Active Business: THE EVENTS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block w-60 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search records..."
                className="pl-10 rounded-2xl"
              />
            </div>

            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <Switch checked={darkMode} onCheckedChange={toggleDark} />
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </header>

        {/* Main Outlet */}
        <main className="flex-1 p-4 md:p-8 space-y-6">
         <Outlet />
        </main>
      </div>
    </div>
  )
}
