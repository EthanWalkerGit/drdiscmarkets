import { frontVinyls } from '../assets/images';
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 flex flex-row justify-center mb-7">
      <div className="w-frImageW">
        <div className="font-poppins text-frSize text-white py-8">
          <h1>Windsor's One-Stop</h1>
          <h1 className="font-bold text-yellow">Music Source</h1>
        </div>
        <div>
          <button onClick={() => navigate('/shop')} className="h-10 w-32 mr-7 bg-yellow text-black font-merriweather font-bold rounded-md">Shop</button>
          <button onClick={() => navigate('/about')} className="h-10 w-32 mr-7 border-2 border-yellow font-merriweather text-yellow rounded-md">About Us</button>
        </div>
      </div>
      <div>
        <img src={frontVinyls} className="w-frImageW h-frImageH" alt="vinyls" />
      </div>
    </div>
  )
}

export default FrontPage