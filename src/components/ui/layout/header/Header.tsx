import UserProfile from "./UserProfile"

const Header = () => {
  return (
    <header className="h-16 w-full grid grid-cols-3 items-center px-6 bg-[#363535]">
     
    <div />

     
  <div className="text-center">
  <h1 className="text-2xl font-extrabold italic tracking-wider">
  <span className="text-[#1E88E5]">SKY</span>
  <span className="mx-1 text-[#787a7c]">_</span>
  <span className="text-[#fdf5db]">LEDGER</span>
  </h1>


      </div>
      <div className="flex justify-end">
        <UserProfile />
      </div>
    </header>
  )
}

export default Header
