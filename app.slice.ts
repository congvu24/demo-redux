import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppSlice {
  message: string;
}

const initialState: AppSlice = {
  message: '',
};

export const asyncSetMessage = createAsyncThunk(
  'app/asyncSetMessage',
  async (payload: string, thunkAPI) => {
    setTimeout(() => {
      //processing some async call
      thunkAPI.dispatch(setMessage(payload));
    }, 1000);
  },
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      console.log('hehe');
      state.message = action.payload;
    },
    removeMessage: state => {
      state.message = '';
    },
  },

  // extraReducers: builder => {
  //   builder.addCase(asyncSetMessage.fulfilled, (state, action) => {
  //     state.message = action.payload;
  //   });
  // },
});

export const {setMessage, removeMessage} = appSlice.actions;

export default appSlice.reducer;
