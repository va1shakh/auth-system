import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-[#120015] min-h-screen flex justify-center items-center">
      <div className="w-100 h-120 bg-[#000000] border border-[#efd9fc] rounded-4xl drop-shadow-4xl flex flex-col items-center pb-7 px-4">
        <p className="text-[#000000] text-4xl bg-[#efd9fc] w-100 h-20 text-center py-3 drop-shadow-4xl rounded-t-2xl">
          Dashboard
        </p>
        <div className="flex flex-col justify-around h-100 items-center ">
          <img
            src="https://avatarfiles.alphacoders.com/174/thumb-1920-174871.png"
            alt="avatar"
            className="w-32 h-32 rounded-full border-2 border-[#efd9fc]"
          />
          <h1 className="text-5xl text-white">
            Hello <span className="text-3xl">{user.username}</span>
          </h1>
          <h1 className="text-3xl text-white">
            You have 9999 + aura !!
          </h1>
          <button className="w-29 h-12 bg-[#000000] rounded-xl border-2 border-[#ffffff] text-[#efd9fc] cursor-pointer hover:bg-[#232323]" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
