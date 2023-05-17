
import pic from "../../../assets/logo1.jpg";

const Header = () => {
  return (
    <div className="w-full h-24 bg-orange-500 flex justify-center items-center">
      <div className="w-11/12 h-full flex items-center justify-between">
        <div>
          <img src={pic} alt="" className="h-14" />
        </div>
        <div className="flex items-center text-base">
          <p className="p-4 ">Home</p>
          <p className="p-4 ">About</p>
          <p className="p-4 ">Contact Us</p>
        </div>
        <div>
          <button className="w-20 h-10 bg-black text-white">Sign Up</button>
          <button className="w-20 h-10 bg-black text-white ml-2">LogIn</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
