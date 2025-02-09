import { useState } from "react";

const Logs = () => {
  const [logs, setLogs] = useState([
    { id: 1, time: "2025-02-09 10:00", user: "admin", action: "Added Domain", details: "example.com" },
    { id: 2, time: "2025-02-09 10:05", user: "user1", action: "Deleted Database", details: "shop_db" },
    { id: 3, time: "2025-02-09 10:10", user: "admin", action: "Edited Permissions", details: "school_db" },
  ]);

  return (
    <div className="p-6 space-y-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-semibold">Activity Logs</h1>
      
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">Time</th>
              <th className="p-2">User</th>
              <th className="p-2">Action</th>
              <th className="p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-2">{log.time}</td>
                <td className="p-2">{log.user}</td>
                <td className="p-2">{log.action}</td>
                <td className="p-2">{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Logs;
