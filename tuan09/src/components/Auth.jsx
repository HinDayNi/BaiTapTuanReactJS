import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserInfo } from '../features/authSlice';

const Auth = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [userInfo, setUserInfoState] = useState({ name: '', email: '', avatar: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username: loginForm.username }));
  };

  const handleUserInfoUpdate = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(userInfo));
  };

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">🎯 5. Quản lý user đăng nhập</h2>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="input"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Đăng nhập
          </button>
        </form>
      ) : (
        <div>
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mb-4">
            <p className="font-bold">Chào mừng, {user.username}!</p>
            {user.name && <p>Tên: {user.name}</p>}
            {user.email && <p>Email: {user.email}</p>}
          </div>
          
          <form onSubmit={handleUserInfoUpdate} className="space-y-3 mb-4">
            <div>
              <label className="block mb-1">Tên</label>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfoState({ ...userInfo, name: e.target.value })}
                className="input"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfoState({ ...userInfo, email: e.target.value })}
                className="input"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Cập nhật thông tin
            </button>
          </form>
          
          <button
            onClick={() => dispatch(logout())}
            className="btn btn-danger w-full"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;