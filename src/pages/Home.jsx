import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Cpu, MemoryStick, HardDrive, Database, Route, FileText, ListCheck } from "lucide-react";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Home = () => {
  const [serverStats, setServerStats] = useState({
    cpu: [],
    ram: [],
    storage: [],
    timestamps: [],
  });

  const [traffic, setTraffic] = useState({
    visitors: [],
    activeUsers: [],
    requestsPerSecond: [],
    errorRate: [],
    timestamps: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();

      setServerStats((prev) => ({
        cpu: [...prev.cpu.slice(-9), Math.floor(Math.random() * 100)],
        ram: [...prev.ram.slice(-9), Math.floor(Math.random() * 100)],
        storage: [...prev.storage.slice(-9), Math.floor(Math.random() * 100)],
        timestamps: [...prev.timestamps.slice(-9), timestamp],
      }));

      setTraffic((prev) => ({
        visitors: [...prev.visitors.slice(-9), Math.floor(Math.random() * 500)],
        activeUsers: [...prev.activeUsers.slice(-9), Math.floor(Math.random() * 100)],
        requestsPerSecond: [...prev.requestsPerSecond.slice(-9), Math.floor(Math.random() * 50)],
        errorRate: [...prev.errorRate.slice(-9), Math.floor(Math.random() * 10)],
        timestamps: [...prev.timestamps.slice(-9), timestamp],
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [overview, setOverview] = useState({
    databases: 10,
    domains: 5,
    logs: 25,
    school: 2,
  });
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Status</h1>

      {/* Server Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={<Cpu size={24} />} title="CPU Usage" value={serverStats.cpu[serverStats.cpu.length - 1] || 0} />
        <StatCard icon={<MemoryStick size={24} />} title="RAM Usage" value={serverStats.ram[serverStats.ram.length - 1] || 0} />
        <StatCard icon={<HardDrive size={24} />} title="Storage Usage" value={serverStats.storage[serverStats.storage.length - 1] || 0} />


      </div>
      <h1 className="text-2xl font-semibold">Data</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <OverviewCard icon={<Database size={24} />} title="Databases" value={overview.databases} />
        <OverviewCard icon={<Route size={24} />} title="Domains" value={overview.domains} />
        <OverviewCard icon={<FileText size={24} />} title="Logs" value={overview.logs} />
        <OverviewCard icon={<ListCheck size={24} />} title="Active School" value={overview.school} />
      </div>
      <h1 className="text-2xl font-semibold">Traffic</h1>

      {/* Traffic Stats */}
      <div className="grid grid-cols-1 gap-6">
        <ChartCard title="Traffic Stats" data={traffic} labels={traffic.timestamps} />
      </div>
    </div>
  );
};

const OverviewCard = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow flex items-center space-x-3">
      {icon}
      <div>
        <h2 className="text-lg">{title}</h2>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

// Component untuk Statistik
const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow">
      <div className="flex items-center space-x-3">
        {icon}
        <h2 className="text-lg">{title}</h2>
      </div>
      <div className="mt-3">
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className={`h-full rounded-full transition-all duration-300 ${value < 50 ? "bg-green-500" : value < 75 ? "bg-yellow-500" : "bg-red-500"
              }`}
            style={{ width: `${value}%` }}
          >

          </div>
        </div>
        <p className="text-sm text-gray-300 mt-1">{value}%</p>
      </div>
    </div>
  );
};

// Component untuk Grafik Chart.js
const ChartCard = ({ title, data, labels }) => {
  const chartData = {
    labels,
    datasets: [

      data.activeUsers && {
        label: "Active Users",
        data: data.activeUsers,
        borderColor: "rgb(255, 205, 86)",
        backgroundColor: "rgba(255, 205, 86, 0.2)",
      },
      data.requestsPerSecond && {
        label: "Requests Per Second",
        data: data.requestsPerSecond,
        borderColor: "rgb(201, 203, 207)",
        backgroundColor: "rgba(201, 203, 207, 0.2)",
      },
      data.errorRate && {
        label: "Error Rate (%)",
        data: data.errorRate,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ].filter(Boolean),
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow">
      <h2 className="text-lg mb-3">{title}</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Home;
