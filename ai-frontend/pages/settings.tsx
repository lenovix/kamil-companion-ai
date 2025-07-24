import Header from "@/components/Header";
import { useState } from "react";

export default function SettingsPage() {
  const [status, setStatus] = useState("");

  const handleReset = async () => {
    try {
      const res = await fetch("http://localhost:8000/reset", {
        method: "POST",
      });
      const data = await res.json();
      setStatus(data.status || "Reset successful.");
    } catch (error) {
      setStatus("Failed to reset.");
    }
  };

  return (
    <>
      <Header />
      <div className="p-6">

        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset Chat History
        </button>

        {status && <p className="mt-3 text-green-600 font-medium">{status}</p>}
      </div>
    </>
  );
}
