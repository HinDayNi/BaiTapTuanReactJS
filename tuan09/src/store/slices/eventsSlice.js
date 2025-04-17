import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  events: [
    {
      id: 1,
      title: "Họp nhóm dự án",
      date: "2023-06-15",
      time: "10:00",
      location: "Phòng họp A",
      description: "Thảo luận về tiến độ dự án",
    },
  ],
  selectedEvent: null,
}

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const newEvent = {
        id: Date.now(),
        ...action.payload,
      }
      state.events.push(newEvent)
    },
    editEvent: (state, action) => {
      const { id, ...updatedEvent } = action.payload
      const index = state.events.findIndex((event) => event.id === id)
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...updatedEvent }
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter((event) => event.id !== action.payload)
    },
    selectEvent: (state, action) => {
      state.selectedEvent = action.payload
    },
  },
})

export const { addEvent, editEvent, deleteEvent, selectEvent } = eventsSlice.actions

export default eventsSlice.reducer
