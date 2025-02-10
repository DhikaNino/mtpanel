import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-400 text-center">
      <div>
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">Oops! Halaman tidak ditemukan.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-400 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
