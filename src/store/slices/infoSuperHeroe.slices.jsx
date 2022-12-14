import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const infoSuperHeroe = createSlice({
    name: 'infoSuperHeroe',
    initialState: [],
    reducers: {
        setInfoSuperHeroe: (state, action) => {
            return action.payload;
        }
    }
});

export const getInfoSuperHeroe = (id) => (dispatch) => {
    return axios.get(`https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes/${id}`)
        .then((res) => dispatch(setInfoSuperHeroe((res.data))))
        .catch((error) => console.log(error));
};

export const { setInfoSuperHeroe } = infoSuperHeroe.actions;

export default infoSuperHeroe.reducer;
