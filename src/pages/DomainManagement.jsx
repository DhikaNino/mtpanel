import { useState } from "react";
import { Plus, Trash, Pencil } from "lucide-react";
import { useNotifier } from "../NotifierContext";

export default function DomainManagement() {
      const { lastPath, setLastPath, notify } = useNotifier();
    

  const [domains, setDomains] = useState([
    { name: "example.com", type: "Primary", subdomains: 2 },
    { name: "shop.example.com", type: "Subdomain", subdomains: 0 },
  ]);
  const [newDomain, setNewDomain] = useState("");
  const [newType, setNewType] = useState("Primary");

  const handleAddDomain = () => {
    if (!newDomain) return;
    setDomains([...domains, { name: newDomain, type: newType, subdomains: 0 }]);
    notify("Berhasil menambahkan domain!", "success");
    setNewDomain("");
  };

  return (
    <div className="p-6 space-y-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-2xl font-semibold">Domain Management</h2>
      
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Enter domain..."
          value={newDomain}
          onChange={(e) => setNewDomain(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded-md focus:ring"
        />
        <select
          className="p-2 bg-gray-800 border border-gray-700 rounded-md"
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
        >
          <option value="Primary">Primary</option>
          <option value="Subdomain">Subdomain</option>
        </select>
        <button
          onClick={handleAddDomain}
          className="bg-indigo-700 hover:bg-indigo-800 p-2 rounded-md flex items-center space-x-2"
        >
          <Plus size={16} /> <span>Add</span>
        </button>
      </div>

      <div className="bg-gray-800 p-4 rounded-md shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">Domain</th>
              <th className="p-2">Type</th>
              <th className="p-2">Subdomains</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-2">{domain.name}</td>
                <td className="p-2">{domain.type}</td>
                <td className="p-2">{domain.subdomains}</td>
                <td className="p-2 flex space-x-2">
                  <button className="text-yellow-400 hover:text-yellow-500">
                    <Pencil size={16} />
                  </button>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
