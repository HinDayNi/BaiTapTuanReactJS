import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../components/features/usersSlice';

const UsersList = () => {
  const { users, status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">6. Đồng bộ dữ liệu từ API</h2>
      
      {status === 'loading' && <p className="text-center">Đang tải dữ liệu...</p>}
      
      {status === 'failed' && <p className="text-red-500">Lỗi: {error}</p>}
      
      {status === 'succeeded' && (
        <div>
          <button
            onClick={() => dispatch(fetchUsers())}
            className="btn btn-primary mb-4"
          >
            Làm mới dữ liệu
          </button>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Tên</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Công ty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.company.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;