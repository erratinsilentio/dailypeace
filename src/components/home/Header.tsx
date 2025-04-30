import { type Link, type Search, Moon } from "lucide-react";
import { Button } from "../ui/button";
import ThemeToggle from "../ThemeToggle.tsx";

export default function Header() {
return (
    <header className="container min-w-screen mx-auto px-8 pl-4 fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-[#F7F8FA] dark:bg-transparent dark:bg-gradient-to-br dark:from-purple-900/25 dark:via-pink-700/15 dark:to-transparent backdrop-blur-md">
      <div className="flex items-center justify-between h-[55px]">

        <a href="/" className="text-xl font-semibold tracking-tight flex flex-row items-center w-1/3">
          <img src="/logo2.png" alt="logo" className="w-[75px] invert-75 dark:invert-25"/>
          <span className="text-black font-[18px] dark:text-white">dailypeace</span>
        </a>

        <nav className="flex justify-center md:flex items-center space-x-6 w-1/3 text-center">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            <span className="text-black hover:text-purple-900 transition delay-50 dark:text-white">Home</span>
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            <span className="text-black hover:text-purple-900 transition delay-50 dark:text-white">Articles</span>
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            <span className="text-black hover:text-purple-900 transition delay-50 dark:text-white">About</span>
          </a>
        </nav>

        <div className="flex items-center justify-end space-x-2 w-1/3">
          <ThemeToggle />
        </div>

      </div>
    </header>
)
}