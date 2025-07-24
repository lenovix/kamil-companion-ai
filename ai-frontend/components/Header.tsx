import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Kamil AI Companion</h1>

      <nav className="space-x-4">
        <Link href="/">
          <span className="hover:underline cursor-pointer">Chat</span>
        </Link>
        <Link href="/settings">
          <span className="hover:underline cursor-pointer">Settings</span>
        </Link>
      </nav>
    </header>
  );
}
