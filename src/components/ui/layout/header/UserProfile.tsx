import {DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Settings } from "lucide-react"

const UserProfile = () => {
  const user = {
    name: "Work",
    email: "amani.k@syntaxnow.com",
    status: "Sync is on",
  }

  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <button className="rounded-full focus:outline-none">
        <Avatar className="h-8 w-8 bg-[#1E88E5]">
       <AvatarFallback className="bg-[#1E88E5]text-[#d1d5db]font-bold transition-colors duration-200 hover:text-[#D4AF37] ">
          {user.name.charAt(0)}
        </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

     
      <DropdownMenuContent align="end" className="w-80 p-4 space-y-3 bg-[#D4AF37]">
        
        <div className="text-xs font-medium text-[#161616]">
          Managed account
        </div>

        <div className="rounded-lg border border-[#1E88E5] bg-[#f1f3f5] p-3 flex items-start gap-3">
         
          <Avatar className="h-10 w-10 bg-[#1E88E5]">
            <AvatarFallback
              className=" bg-[#1E88E5]text-[#d1d5db] font-bold transition-colors duration-200 hover:text-[#D4AF37]">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">
              {user.name}
            </p>
            <p className="text-xs text-gray-600">
              {user.email}
            </p>

            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <span>●</span>
              <span>{user.status}</span>
            </div>
          </div>

          <button
            className="p-1 rounded-md hover:bg-gray-200"
            title="Settings"
          >
            <Settings size={16} className="text-[#D4AF37]" />
          </button>
        </div>

        <div className="text-sm text-gray-700 rounded-md px-2 py-1 cursor-pointer hover:bg-[#f1f3f5]">
          + Set up new personal profile
        </div>

        <div className="text-sm text-gray-700 rounded-md px-2 py-1 cursor-pointer hover:bg-[#f1f3f5]">
          Other profiles
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserProfile
