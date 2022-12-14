import "../index.css";
import Card from '../Components/Card';
import AnimationSuperMan from './../Components/AnimationSuperMan';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSuperHeroes } from "../store/slices/superHeroes.slices";
import { useEffect } from "react";

const Home = () => {
    const superHeroes = useSelector((state) => state.superHeroes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSuperHeroes());
    },[]);
    return (
    <div>
        <div>
            <AnimationSuperMan/>
        </div>
        <div className="text-center">
            <h1 className="text-5xl font-bold absolute top-24 right-0 left-0 z-10 rounded-xl">SuperHeroes</h1>
        </div>
        <div className="py-2">
            <div className="flex flex-col items-center mx-8  md:flex-row md:flex-wrap md:gap-3 justify-center">
            {
                superHeroes.map((superHeroe) => (
                    <Card superHeroe={superHeroe} key={superHeroe?.id}/>
                ))
            }
            </div>
            
        </div>
    </div>
    );
};

export default Home;