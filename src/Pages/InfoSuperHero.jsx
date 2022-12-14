import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getInfoSuperHeroe } from '../store/slices/infoSuperHeroe.slices';
import { Navigate } from 'react-router-dom';

const InfoSuperHero = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInfoSuperHeroe(id));
    }, []);
    const infoSuperHeroe = useSelector((state) => state.infoSuperHeroe);
    const navigate = useNavigate();
    return (
        <div className='md:flex md:items-center md:justify-center h-screen overflow-hidden'>
            <div className="text-center bg-black shadow shadow-white p-3">
                <div className="text-left text-2xl cursor-pointer" onClick={() => navigate("/")}><i class="fa-solid fa-arrow-left"></i></div>
                    <div className='img-info mt-4'>
                        <img src={infoSuperHeroe.imgUrl} alt=""/>
                    </div>
                    <div>
                        <h1 className="text-3xl py-3">{infoSuperHeroe.name}</h1>
                    </div>
                    <div className="text-left md:text-center">
                        <p>{infoSuperHeroe.description}</p>
                    </div>
                    <div>
                        <p className='py-3 text-left md:text-center'>{infoSuperHeroe.alterEgo}</p>
                    </div>
                <p className="text-left md:text-center">Comic: {infoSuperHeroe.comic} </p>
            </div>
        </div>
    );
};

export default InfoSuperHero;