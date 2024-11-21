import Link from "next/link"
import Logo from "./Logo"


function navbar({ className }: { className?: string }) {
  return (
    <nav className="m-0 md:m-4 p-3 md:p-6 shadow-md bg-gradient-to-r from-[#003366]/[50%] to-[#ffffff] md:rounded-xl">
      <div className="flex flex-wrap items-center justify-between">
        <Logo/>
        <div>
        <Link href="/sign-in">
            <button className="w-full md:w-auto text-black">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default navbar