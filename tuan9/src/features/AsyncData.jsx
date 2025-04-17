"use client"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "../store/slices/usersSlice"

function AsyncData() {
  const { users, status, error } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  return (
    <div className="feature-container">
      <h2>🔄 Đồng bộ dữ liệu từ API (Async Thunk)</h2>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => dispatch(fetchUsers())} disabled={status === "loading"}>
          {status === "loading" ? "Đang tải..." : "Tải lại dữ liệu"}
        </button>

        {status === "loading" && <p>Đang tải dữ liệu...</p>}

        {status === "failed" && <div style={{ color: "#ef4444", margin: "1rem 0" }}>Lỗi: {error}</div>}

        {status === "succeeded" && (
          <div style={{ marginTop: "1rem" }}>
            <h3>Danh sách người dùng từ JSONPlaceholder API:</h3>
            <div style={{ marginTop: "1rem" }}>
              {users.map((user) => (
                <div
                  key={user.id}
                  style={{
                    padding: "1rem",
                    marginBottom: "0.5rem",
                    backgroundColor: "#f9fafb",
                    borderRadius: "0.25rem",
                  }}
                >
                  <h4>{user.name}</h4>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p>
                    <strong>Website:</strong> {user.website}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AsyncData
