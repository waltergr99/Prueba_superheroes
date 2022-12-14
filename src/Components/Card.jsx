import { useNavigate } from 'react-router-dom';

const Card = ({ superHeroe }) => {
    const navigate = useNavigate();
    return (
        <div className="font-bold img-card flex items-center rounded-md my-3 cursor-pointer shadow-md shadow-gray-100 hover:shadow-none" onClick={() => navigate(`/superheroe/${superHeroe?.id}`)}>
            <div className="img">
                <img src={superHeroe?.imgUrl} alt="" className="rounded-md"/>
            </div>
            <div className="w-50 text-center mx-2">
                <p className="text-center">{superHeroe?.name}</p>
            </div>
        </div>
    );
};

export default Card;