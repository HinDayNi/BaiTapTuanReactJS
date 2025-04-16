import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent, editEvent, deleteEvent, setCurrentEvent } from '../features/eventsSlice';

const EventManager = () => {
  const { events, currentEvent } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    if (currentEvent) {
      setFormData({
        title: currentEvent.title || '',
        date: currentEvent.date || '',
        location: currentEvent.location || '',
        description: currentEvent.description || '',
      });
    } else {
      resetForm();
    }
  }, [currentEvent]);

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      location: '',
      description: '',
    });
    dispatch(setCurrentEvent(null));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEvent) {
      dispatch(editEvent({ id: currentEvent.id, ...formData }));
    } else {
      dispatch(addEvent(formData));
    }
    resetForm();
  };

  const handleEdit = (event) => {
    dispatch(setCurrentEvent(event));
  };

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">📅 9. Event Management</h2>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <div>
          <label className="block mb-1">Tiêu đề</label>
          <input
            type="text"
            name="title"
            value={formData.title}
             onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Ngày</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Địa điểm</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Mô tả</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input min-h-24"
            required
          ></textarea>
        </div>
        <div className="flex gap-2">
          <button type="submit" className="btn btn-primary flex-1">
            {currentEvent ? 'Cập nhật sự kiện' : 'Thêm sự kiện'}
          </button>
          {currentEvent && (
            <button
              type="button"
              onClick={resetForm}
              className="btn btn-secondary"
            >
              Hủy
            </button>
          )}
        </div>
      </form>

      <h3 className="font-bold mb-2">Danh sách sự kiện</h3>
      {events.length === 0 ? (
        <p className="text-gray-500">Chưa có sự kiện nào!</p>
      ) : (
        <div className="space-y-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded p-3 dark:border-gray-700"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold">{event.title}</h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(event)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => dispatch(deleteEvent(event.id))}
                    className="text-red-500 hover:text-red-700"
                  >
                    Xóa
                  </button>
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p>Ngày: {event.date}</p>
                <p>Địa điểm: {event.location}</p>
                {event.description && <p className="mt-2">{event.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventManager;
            