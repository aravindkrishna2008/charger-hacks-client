import Image from "next/image";
import { getAuth } from "firebase/auth";


const PfpAndWelcome = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-[24px] text-white font-bold">Hi {getAuth().currentUser.displayname.split(" ")[0]}! 👋</h1>
        <p className="text-[20px] -mt-2 text-[#FFFFFFCC] font-medium">
          Ready to go green?
        </p>
      </div>
      <Image
        width={100}
        height={100}
        src="/dummy-img/profile.png"
        className="w-[50px] h-[50px]"
        alt="profile"
      />

      {/* <input type="file" name="image" accept="image/*" capture="environment" /> */}
    </div>
  );
};

export default PfpAndWelcome;
