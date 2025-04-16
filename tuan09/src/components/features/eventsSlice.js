import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    currentEvent: null,
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    editEvent: (state, action) => {
      const { id, ...updatedEvent } = action.payload;
      const eventIndex = state.events.findIndex(event => event.id === id);
      if (eventIndex !== -1) {
        state.events[eventIndex] = { id, ...updatedEvent };
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    setCurrentEvent: (state, action) => {
      state.currentEvent = action.payload;
    },
  },
});

export const { addEvent, editEvent, deleteEvent, setCurrentEvent } = eventsSlice.actions;
export default eventsSlice.reducer;