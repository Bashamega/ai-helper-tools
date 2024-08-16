import Link from "next/link";

export function HomeNav() {
  return (
    <nav className="bg-blue-500 p-4 h-[50px] ">
      <Link
        href={"/"}
        className="text-white text-2xl font-bold hover:backdrop-blur"
      >
        Gemini Tools
      </Link>
    </nav>
  );
}
