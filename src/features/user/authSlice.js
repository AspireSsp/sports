import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get, patch, post } from '../../apis/api';

const token = JSON.parse(localStorage.getItem('token'));

let initialState= {
    isLoading: false,
    isError: false,
    isLogin: token ? true : false,
    user: null,
    users: [],
};

export const loginUser = createAsyncThunk('login', async (requestData, { rejectWithValue }) => {
  try {
    const res = await post('user/login', requestData);
    localStorage.setItem('token', JSON.stringify(res.data.token));
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const signupUser = createAsyncThunk('signup', async (requestData, { rejectWithValue }) => {
  try {
    const res = await post('user/register', requestData);
    localStorage.setItem('token', JSON.stringify(res.data.token));
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getUser = createAsyncThunk('getUser', async (requestData, { rejectWithValue }) => {
  try {
    const res = await get('user/get');
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const updateUser = createAsyncThunk('updateUser', async (requestData, { rejectWithValue }) => {
  try {
    console.log(requestData);
    const res = await patch(`user/update/${requestData._id}`, requestData.body);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getAllUser = createAsyncThunk('getAllUser', async (requestData, { rejectWithValue }) => {
  try {
    console.log("my data",requestData);
    const res = await get(`user/get/all?name=${requestData.name}&distance=${requestData.distance}&location=${requestData.location}&sport=${requestData.interest}`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});



const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            checkToken: (state, action)=>{
                const user = JSON.parse(localStorage.getItem('token'));
                
            },
            logoutUser : (state, action)=>{
                localStorage.removeItem('token');
                state.user = null;
                state.isLogin = false;
            }
        },
        extraReducers: (builder)=>{
            builder.addCase(loginUser.pending, (state, action)=>{
                state.isLoading = true;
            });
            builder.addCase(loginUser.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                // console.log("Error->",action.payload);
            });
            builder.addCase(loginUser.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isLogin = true;
                state.user = action.payload.user;
            });
            builder.addCase(signupUser.pending, (state, action)=>{
                state.isLoading = true;
            });
            builder.addCase(signupUser.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                // console.log("Error->",action.payload);
            });
            builder.addCase(signupUser.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isLogin = true;
                state.user = action.payload.user;
            });
            builder.addCase(getUser.pending, (state, action)=>{
                state.isLoading = true;
            });
            builder.addCase(getUser.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                // console.log("Error->",action.payload);
            });
            builder.addCase(getUser.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isLogin = true;
                state.user = action.payload.user;
            });

            builder.addCase(getAllUser.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isLogin = true;
                state.users = action.payload.users;
            });

            builder.addCase(updateUser.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isLogin = true;
                state.users = action.payload.user;
            });
        }
    }
)

export default authSlice.reducer;
export const { checkUser, logoutUser } = authSlice.actions