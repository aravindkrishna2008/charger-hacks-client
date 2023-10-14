import Image from "next/image";
const Card = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(105deg, #01EFAF 1.51%, #6098D3 47.57%, #EF40ED 98.69%)",
      }}
      className="mt-[25px] p-[25px] rounded-lg w-[100%] h-[207px] flex flex-col gap-[4px]"
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-white text-[20px] font-semibold">Rohan Fernades</h1>
        <div className="flex flex-row gap-2">
          <Image
            src="/icon/lock.png"
            width={50}
            height={50}
            alt="solanalogo"
            className="w-[5vw] h-[5vw]"
          />
          <Image
            src="/icon/shield.png"
            width={500}
            height={500}
            alt="solanalogo"
            className="w-[5vw] h-[5vw]"
          />
        </div>
      </div>
      <div className="flex flex-row gap-[12px] items-center">
        <div className="flex flex-row gap-[4.5px]">
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
        </div>
        <div className="flex flex-row gap-[4.5px]">
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
        </div>
        <div className="flex flex-row gap-[4.5px]">
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
        </div>
        <div className="flex flex-row gap-[4.5px]">
          <div className="text-[12px] text-white font-semibold">6942</div>
        </div>
      </div>
      <p className="text-[12px] text-white font-semibold mt-[2px]">
        Exp: 10/23
      </p>
      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-row">
          <Image
            src="/icon/share.png"
            width={50}
            height={50}
            alt="share"
            className="w-[10vw] h-[10vw]"
          />
          <Image
            src="/icon/copy.png"
            width={50}
            height={50}
            alt="copy"
            className="w-[10vw] h-[10vw] ml-1"
          />
        </div>
        <Image
          src="/logo/solanalogo.png"
          width={50}
          height={50}
          alt="solanalogo"
          className="w-[10vw] h-[10vw]"
        />
      </div>
    </div>
  );
};

export default Card;
