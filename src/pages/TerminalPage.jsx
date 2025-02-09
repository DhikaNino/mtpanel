import { useState } from "react";
import { Terminal } from "lucide-react";

export default function TerminalPage() {
  const [commands, setCommands] = useState([
    { command: "Hai Andhika, selamat datang di Terminal", output: "Ketik 'help' untuk melihat command." },
  ]);
  const [input, setInput] = useState("");

  const handleCommand = () => {
    let output = "Command not found";
    if (input === "help") {
      output = "List: clear, date, echo [message]";
    } else if (input === "clear") {
      setCommands([]);
      setInput("");
      return;
    } else if (input.startsWith("echo ")) {
      output = input.replace("echo ", "");
    } else if (input === "date") {
      output = new Date().toString();
    }

    setCommands([...commands, { command: input, output }]);
    setInput("");
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white font-mono">
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 mx-auto">
        <div className="flex items-center gap-2 border-b border-gray-700 pb-2 mb-2">
          <Terminal size={20} />
          <span className="text-lg">Terminal</span>
        </div>
        <div className="h-96 overflow-y-auto bg-gray-900 p-2 rounded-lg">
          {commands.map((cmd, index) => (
            <div key={index}>
              <p className="text-green-400">$ {cmd.command}</p>
              <p className="text-gray-300">{cmd.output}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-3 bg-gray-900 p-2 rounded-lg">
          <span className="text-green-400">$</span>
          <input
            type="text"
            className="bg-transparent border-none outline-none text-white w-full ml-2"
            value={input}
            placeholder="Ketik command disini!"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            autoFocus
          />
        </div>
      </div>
      <p className="text-center mt-10">Aktivitas kamu kan tercatat di Logs, gunakan dengan bijak untuk menghindari kesalahan!</p>
    </div>
  );
}