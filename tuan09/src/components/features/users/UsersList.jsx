import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        📡 6. Đồng bộ dữ liệu từ API (Async Thunk)
      </h2>

      {status === 'loading' && (
        <p className="text-center text-gray-600 dark:text-gray-300">Đang tải dữ liệu...</p>
      )}

      {status === 'failed' && (
        <p className="text-red-600 font-semibold">Lỗi: {error}</p>
      )}

      {status === 'succeeded' && (
        <>
          <button
            onClick={() => dispatch(fetchUsers())}
            className="mb-4 !bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Làm mới dữ liệu
          </button>

          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">ID</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Tên</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Email</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Công ty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{user.id}</td>
                    <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{user.name}</td>
                    <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{user.email}</td>
                    <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{user.company.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default UsersList;
