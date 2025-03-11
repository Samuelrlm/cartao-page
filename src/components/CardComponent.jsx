import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

export default function CardComponent() {
  return (
    <div className="w-[600px] h-[340px] bg-black rounded-[20px] mt-[30px] ml-[70px]">
      <div className="w-full h-[30%] flex">
        <div className="w-[30%] h-full flex items-center justify-center gap-[5px]">
          <div className="bg-gray-50 w-[80px] h-[80px] rounded-full"></div>
          <div className="bg-gray-50 w-[60px] h-[60px] rounded-full"></div>
        </div>
        <div className="w-[70%] h-full flex items-start justify-end pr-[20px] pt-[15px]">
          <p className="text-[23px] text-white">Nome do banco</p>
        </div>
      </div>
      <div className="w-full h-[30%] pl-[20px] flex items-center">
        <FcSimCardChip size={100} />
        <LuNfc size={40} color="#ffffff" />
      </div>
      <div className="w-full pl-[20px]">
        <p className="text-[40px] text-white">
          {"0000 0000 0000 0000"}
        </p>
        <p className="text-[30px] text-white">{"Nome no cartão"}</p>
      </div>
    </div>
  );
}
