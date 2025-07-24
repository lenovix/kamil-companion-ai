export default function MicInput({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const handleClick = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onSend(transcript);
    };
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      🎤 Speak
    </button>
  );
}
