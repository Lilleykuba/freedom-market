export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-indigo-800 text-white w-full h-16">
      <h1 className="text-2xl font-bold">Freedom Market</h1>
      <nav className="flex">
        {/* link 1 – wipe starts at the right edge (origin-right) */}
        <a
          href="/nabidky"
          alt="Nabídky"
          className="
    group relative overflow-hidden border-r-2 px-4 py-2
    before:content-[''] before:absolute before:inset-0 before:bg-yellow-400/80
    before:origin-right before:scale-x-0 before:transition-transform before:duration-300
    hover:before:scale-x-100
  "
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-2xl">
            Nabídky
          </span>
        </a>
        <a
          href="/poptavky"
          alt="Poptávky"
          className="
      group relative overflow-hidden px-4 py-2
      before:content-[''] before:absolute before:inset-0 before:bg-black before:origin-left 
      before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100
    "
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-2xl">
            Poptávky
          </span>
        </a>
      </nav>
      <nav>
        <a
          href="/login"
          className="flex items-center gap-2 px-4 py-2 hover:underline transition-colors"
          aria-label="Přihlásit se"
        >
          {/* User Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>
          <span className="hidden sm:inline">Přihlásit se</span>
        </a>
      </nav>
    </header>
  );
}
