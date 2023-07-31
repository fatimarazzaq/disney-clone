import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    photo: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.photo = action.payload.photo;
    },
    setLogout: (state) => {
      state.user.name = null;
      state.user.email = null;
      state.user.photo = null;
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
