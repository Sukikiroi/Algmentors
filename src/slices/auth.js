import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action) => {
  
     
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { login} = authSlice.actions

export default authSlice.reducer