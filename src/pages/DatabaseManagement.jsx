import { useState } from "react";
import { Database, UserPlus, Trash, Pencil } from "lucide-react";
import { useNotifier } from "../NotifierContext";

export default function DatabaseManagement() {
  const [databases, setDatabases] = useState([
    { name: "school_db", owner: "admin", permissions: "Read/Write" },
    { name: "shop_db", owner: "user1", permissions: "Read Only" },
  ]);
  const [openAddDB, setOpenAddDB] = useState(false);
  const [newDB, setNewDB] = useState({ name: "", owner: "", permissions: "Read/Write" });
      const { lastPath, setLastPath, notify } = useNotifier();

  const handleAddDB = () => {
    setDatabases([...databases, newDB]);
    notify("Berhasil menambahkan database baru!", "success");

    setOpenAddDB(false);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Database Management</h1>

  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Databases" value={databases.length} icon={<Database size={24} />} />
        <StatCard title="Total Users" value={5} icon={<UserPlus size={24} />} />
      </div>

      <div className="flex gap-4">
        <button className="px-4 py-2 bg-indigo-700 text-white rounded" onClick={() => setOpenAddDB(true)}>+ Add Database</button>
      </div>

      <div className="overflow-x-auto bg-gray-800 text-white p-4 rounded-lg">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 border border-gray-600">Name</th>
              <th className="p-2 border border-gray-600">Owner</th>
              <th className="p-2 border border-gray-600">Permissions</th>
              <th className="p-2 border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {databases.map((db, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border border-gray-600">{db.name}</td>
                <td className="p-2 border border-gray-600">{db.owner}</td>
                <td className="p-2 border border-gray-600">{db.permissions}</td>
                <td className="p-2 border border-gray-600"> 
                  <div className="flex justify-center gap-2 items-center">
                    <button className="text-yellow-400 flex gap-1"><Pencil size={16} /></button>
                    <button className="text-red-400 flex gap-1"><Trash size={16} /></button>
                  </div>
                </td>
       
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openAddDB && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add Database</h2>
            <input type="text" placeholder="Database Name" className="w-full bg-gray-800 p-2 border rounded mb-2" onChange={(e) => setNewDB({ ...newDB, name: e.target.value })} />
            <input type="text" placeholder="Owner" className="w-full bg-gray-800 p-2 border rounded mb-2" onChange={(e) => setNewDB({ ...newDB, owner: e.target.value })} />
            <select className="w-full p-2 border bg-gray-800 rounded mb-4" onChange={(e) => setNewDB({ ...newDB, permissions: e.target.value })}>
              <option>Read/Write</option>
              <option>Read Only</option>
            </select>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-400 rounded" onClick={() => setOpenAddDB(false)}>Cancel</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAddDB}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="p-4 flex items-center gap-4 bg-gray-800 text-white rounded-lg shadow">
      {icon}
      <div>
        <h2 className="text-lg">{title}</h2>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};
