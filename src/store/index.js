import { configureStore } from '@reduxjs/toolkit'
import superHeroes from './slices/superHeroes.slices';
import infoSuperHeroe from './slices/infoSuperHeroe.slices';

export default configureStore({
    reducer: {
        superHeroes: superHeroes,
        infoSuperHeroe: infoSuperHeroe
    }
});