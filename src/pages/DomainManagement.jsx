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
      
      
      <h1>Main Domain</h1>
      <div className="flex justify-between items-center space-x-4">
        <input
          type="text"
          placeholder="Search Domain..."
          value={newDomain}
          onChange={(e) => setNewDomain(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded-md focus:ring"
        />
       
        <button
          onClick={handleAddDomain}
          className="bg-indigo-700 hover:bg-indigo-800 p-2 rounded-md flex items-center space-x-2"
        >
          <Plus size={16} /> <span>Tambah Domain</span>
        </button>
      </div>
      <div className="overflow-x-auto bg-gray-800 text-white p-4 rounded-lg">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 border border-gray-600">Domain</th>
              <th className="p-2 border border-gray-600">Type</th>
              <th className="p-2 border border-gray-600">Subdomains</th>
              <th className="p-2 border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border border-gray-600">{domain.name}</td>
                <td className="p-2 border border-gray-600">{domain.type}</td>
                <td className="p-2 border border-gray-600">{domain.subdomains}</td>
                <td className="p-2 border border-gray-600"> 
                  <div className="flex justify-center gap-2 items-center">
                    <button className="text-red-400 flex gap-1 items-center"><Trash size={16} /> Hapus</button>
                  </div>
                </td>
       
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1>Sub Domain</h1>
      <div className="flex justify-between items-center space-x-4">
        <input
          type="text"
          placeholder="Search Sub Domain..."
          value={newDomain}
          onChange={(e) => setNewDomain(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded-md focus:ring"
        />
       
        <button
          onClick={handleAddDomain}
          className="bg-indigo-700 hover:bg-indigo-800 p-2 rounded-md flex items-center space-x-2"
        >
          <Plus size={16} /> <span>Tambah Sub Domain</span>
        </button>
      </div>
      <div className="overflow-x-auto bg-gray-800 text-white p-4 rounded-lg">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 border border-gray-600">Domain</th>
              <th className="p-2 border border-gray-600">Type</th>
              <th className="p-2 border border-gray-600">Subdomains</th>
              <th className="p-2 border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border border-gray-600">{domain.name}</td>
                <td className="p-2 border border-gray-600">{domain.type}</td>
                <td className="p-2 border border-gray-600">{domain.subdomains}</td>
                <td className="p-2 border border-gray-600"> 
                  <div className="flex justify-center gap-2 items-center">
                    <button className="text-red-400 flex gap-1 items-center"><Trash size={16} /> Hapus</button>
                  </div>
                </td>
       
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
