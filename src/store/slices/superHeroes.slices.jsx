import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const superHeroes = createSlice({
    name: 'superHeroes',
    initialState: [],
    reducers: {
        setSuperHeroes: (state, action) => {
            return action.payload;
        }
    }
});

export const getSuperHeroes = () => (dispatch) => {
    return axios.get("https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes")
        .then((res) => dispatch(setSuperHeroes(res.data)))
        .catch((error) => console.log(error));
};

export const { setSuperHeroes } = superHeroes.actions;

export default superHeroes.reducer;
