import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";

export function HomeNav() {
  return (
    <nav className="bg-blue-500 p-4 h-[50px] flex items-center justify-between dark:bg-gray-900">
      <Link
        href={"/"}
        className="text-white text-2xl font-bold hover:backdrop-blur dark:text-gray-200"
      >
        Gemini Tools
      </Link>
      <DarkModeToggle />
    </nav>
  );
}
