import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserInfo } from '../components/features/authSlice';

const Auth = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [userInfoForm, setUserInfoForm] = useState({ name: '', email: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username: loginForm.username }));
    setLoginForm({ username: '', password: '' });
  };

  const handleUserInfoUpdate = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(userInfoForm));
    setUserInfoForm({ name: '', email: '' });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        🎯 5. Quản lý user đăng nhập
      </h2>

      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Username
            </label>
            <input
              type="text"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full !bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Đăng nhập
          </button>
        </form>
      ) : (
        <div>
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mb-4 text-gray-800 dark:text-white">
            <p className="font-semibold">Chào mừng, {user.username}!</p>
            {user.name && <p className="mt-1">Tên: {user.name}</p>}
            {user.email && <p>Email: {user.email}</p>}
          </div>

          <form onSubmit={handleUserInfoUpdate} className="space-y-4 mb-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Tên
              </label>
              <input
                type="text"
                value={userInfoForm.name}
                onChange={(e) => setUserInfoForm({ ...userInfoForm, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                value={userInfoForm.email}
                onChange={(e) => setUserInfoForm({ ...userInfoForm, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full !bg-blue-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Cập nhật thông tin
            </button>
          </form>

          <button
            onClick={handleLogout}
            className="w-full !bg-blue-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
