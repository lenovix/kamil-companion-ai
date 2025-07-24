import Header from "@/components/Header";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <Chat />
      </main>
    </>
  );
}
