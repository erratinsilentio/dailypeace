import { type Link, type Search, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Header() {
return (
    <header className="container min-w-screen mx-auto px-8 py-6 fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-[oklch(0.967 0.001 286.375)]">
      <div className="flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight text-black">
          <span className="text-black">dailyPeace</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            <span className="text-black hover:text-purple-900 transition delay-50">Home</span>
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            <span className="text-black hover:text-purple-900 transition delay-50">Articles</span>
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            <span className="text-black hover:text-purple-900 transition delay-50">About</span>
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <div className="relative hidden md:block">
          <Moon />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
)
}