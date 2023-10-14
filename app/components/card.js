const Card = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(105deg, #01EFAF 1.51%, #6098D3 47.57%, #EF40ED 98.69%)",
      }}
      className="mt-[25px] p-[25px] rounded-lg w-[100%] h-[207px]"
    >
      <h1 className="text-white text-[20px] font-semibold">Rohan Fernades</h1>
      <div className="flex flex-row gap-[12px] mt-[2px] items-center">
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
          <div className="text-[12px] text-white font-semibold">2556</div>
        </div>
      </div>
          <p className="text-[12px] text-white font-semibold">Exp: 10/23</p>
          <div></div>
    </div>
  );
};

export default Card;
