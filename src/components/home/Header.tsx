import ThemeToggle from "../ThemeToggle.tsx";

/** @param {{ currentPath: string }} props */
export default function Header({ currentPath }: { currentPath: string }) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/articles", label: "Articles" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="container min-w-screen mx-auto px-4 md:px-8 pl-4 fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-[#F7F8FA] dark:bg-transparent dark:bg-gradient-to-r dark:via-pink-700/15 backdrop-blur-md dark:from-purple-950/20 dark:to-blue-950/20">
      <div className="flex items-center justify-between h-[55px]">
        <a
          href="/"
          className="text-xl font-semibold tracking-tight flex flex-row items-center w-1/3"
        >
          <img
            src="/logo2.png"
            alt="logo"
            className="w-[50px] md:w-[75px] invert-75 dark:invert-25"
          />
          <span className="hidden md:block text-black font-[18px] dark:text-white">
            dailypeace
          </span>
        </a>

        <nav className="flex justify-center items-center md:space-x-2 w-1/3 text-center">
          {navItems.map((item) => {
            const isActive =
              currentPath === item.href ||
              currentPath.startsWith(item.href + "/");

            return (
              <a key={item.href} href={item.href}>
                <span
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                    isActive
                      ? "dark:bg-stone-900 text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end space-x-2 w-1/3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
