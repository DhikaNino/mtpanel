const Auth = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Team Login</h2>
        <form className="mt-6" action="/">
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-700 text-white focus:ring focus:ring-indigo-500"
              placeholder="example@matting.dev"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-700 text-white focus:ring focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-indigo-700 rounded-lg hover:bg-indigo-800"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
