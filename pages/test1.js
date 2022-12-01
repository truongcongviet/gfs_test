import React from "react";

export default function Test1() {
  return (
    <div className="container mx-auto h-screen overflow-hidden">
      <div className="pt-[50px] mx-auto mb-6">
        <h3 className="uppercase text-3xl flex justify-center font-mono">
          Điểm Đến Du lịch
        </h3>
      </div>
      <div className="w-full h-full grid grid-cols-2 gap-6 pb-6">
        <div className="w-full h-[80%] grid grid-rows-2 gap-6">
          
          <div className="bg-orange-800 h-full w-full">
            <div className="ml-6 mt-2">
              <h3 className="uppercase font-mono"> Đấu Trường Roma </h3>
              <p>Italia</p>
            </div>
          </div>
          <div className="flex justify-between gap-6 h-full w-full">
            <div className="bg-green-400 h-full w-full">
              <div className="ml-6 mt-2">
                <h3 className="uppercase font-mono"> Kim Tự Tháp </h3>
                <p>Ai Cap</p>
              </div>
            </div>
            <div className="bg-teal-300	 h-full w-full">
              <div className="ml-6 mt-2">
                <h3 className="uppercase font-mono"> Tháp Eiffel </h3>
                <p>Pháp</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[80%] grid grid-rows-2 gap-6">
          <div className="flex justify-between gap-6 h-full w-full">
            <div className="bg-green-400 h-full w-full">
              <div className="ml-6 mt-2">
                <h3 className="uppercase font-mono"> Hội An </h3>
                <p>Quảng Nam</p>
              </div>
            </div>
            <div className="bg-teal-300	 h-full w-full">
              <div className="ml-6 mt-2">
                <h3 className="uppercase font-mono"> Đông Phong Nha </h3>
                <p>Quảng Bình</p>
              </div>
            </div>
          </div>
          <div className="bg-orange-800 h-full w-full">
            <div className="ml-6 mt-2">
              <h3 className="uppercase font-mono"> Vịnh Hạ Long </h3>
              <p>Quảng Ninh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
