"use client"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addEvent, editEvent, deleteEvent, selectEvent } from "../store/slices/eventsSlice"

function EventManagement() {
  const { events, selectedEvent } = useSelector((state) => state.events)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  })

  useEffect(() => {
    if (selectedEvent) {
      setFormData(selectedEvent)
    } else {
      resetForm()
    }
  }, [selectedEvent])

  const resetForm = () => {
    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.title || !formData.date) {
      alert("Vui lòng nhập tiêu đề và ngày")
      return
    }

    if (selectedEvent) {
      dispatch(editEvent({ id: selectedEvent.id, ...formData }))
    } else {
      dispatch(addEvent(formData))
    }

    resetForm()
    dispatch(selectEvent(null))
  }

  const handleCancel = () => {
    resetForm()
    dispatch(selectEvent(null))
  }

  return (
    <div className="feature-container">
      <h2>📅 Quản lý sự kiện (Event Management)</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1.5rem" }}>
        <form onSubmit={handleSubmit}>
          <h3>{selectedEvent ? "Chỉnh sửa sự kiện" : "Thêm sự kiện mới"}</h3>

          <div className="form-group">
            <label htmlFor="title">Tiêu đề</label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Nhập tiêu đề sự kiện"
              required
            />
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="date">Ngày</label>
              <input id="date" type="date" name="date" value={formData.date} onChange={handleInputChange} required />
            </div>

            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="time">Thời gian</label>
              <input id="time" type="time" name="time" value={formData.time} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Địa điểm</label>
            <input
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Nhập địa điểm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Mô tả</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Nhập mô tả sự kiện"
              rows="3"
              style={{ width: "100%", padding: "0.5rem", borderRadius: "0.25rem", border: "1px solid #d1d5db" }}
            ></textarea>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button type="submit">{selectedEvent ? "Cập nhật" : "Thêm sự kiện"}</button>
            {selectedEvent && (
              <button type="button" onClick={handleCancel} style={{ backgroundColor: "#6b7280" }}>
                Hủy
              </button>
            )}
          </div>
        </form>

        <div>
          <h3>Danh sách sự kiện</h3>

          {events.length === 0 ? (
            <p>Không có sự kiện nào</p>
          ) : (
            <div style={{ marginTop: "1rem" }}>
              {events.map((event) => (
                <div key={event.id} className="event-item">
                  <div>
                    <h4>{event.title}</h4>
                    <p>
                      <strong>Ngày:</strong> {event.date} {event.time && `lúc ${event.time}`}
                    </p>
                    {event.location && (
                      <p>
                        <strong>Địa điểm:</strong> {event.location}
                      </p>
                    )}
                    {event.description && (
                      <p>
                        <strong>Mô tả:</strong> {event.description}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      onClick={() => dispatch(selectEvent(event))}
                      style={{ backgroundColor: "#0ea5e9", marginRight: "0.5rem" }}
                    >
                      Sửa
                    </button>
                    <button onClick={() => dispatch(deleteEvent(event.id))} style={{ backgroundColor: "#ef4444" }}>
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventManagement
