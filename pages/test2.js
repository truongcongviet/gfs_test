import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";
import { GoGitBranch, GoHome } from "react-icons/go";

export default function Test2() {
  const [openMenu, setOpenMenu] = useState(false);

  const openToogleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="relative mx-auto container">
      <div className="container absolute mx-auto h-screen overflow-hidden">
        <div
          className="relative w-[32px] h-auto mt-10 cursor-pointer"
          onClick={() => openToogleMenu()}
        >
          <IconContext.Provider
            value={{
              color: "#fb9115",
              size: "32px",
              className: "min-w-[32px]",
            }}
          >
            <FiAlignJustify />
          </IconContext.Provider>
        </div>
        <div
          className={`absolute w-[375px] transition-all duration-300 h-full mt-6 ${
            openMenu ? "translate-x-0" : "-translate-x-[100%]"
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-8">
            <input
              placeholder="Tìm Kiếm..."
              className="border-2 border-zinc-500 grow rounded p-2"
            />
            <div className="w-12 h-12 flex items-center justify-center bg-[#fb9115] rounded-lg">
              <IconContext.Provider
                value={{
                  color: "#FFFFFF",
                  size: "20px",
                  className: "min-w-[20px]",
                }}
              >
                <CiSearch />
              </IconContext.Provider>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2 mt-2 mb-4">
            <div className="">
              <IconContext.Provider
                value={{
                  color: "#fb9115",
                  size: "24px",
                  className: "min-w-[24px]",
                }}
              >
                <GoGitBranch />
              </IconContext.Provider>
            </div>
            <p className="text-[20px]">Liên Kết Nhanh</p>
          </div>
          <div className="grid grid-rows-4 grid-flow-col gap-3">
            <div className="flex items-center gap-3 justify-start border border-zinc-500 rounded p-2 bg-gray-200">
              <div className="">
                <IconContext.Provider
                  value={{
                    size: "24px",
                    className: "min-w-[24px]",
                  }}
                >
                  <GoHome />
                </IconContext.Provider>
              </div>
              <p className="font-serif">Trang Chủ</p>
            </div>
            <div className="flex items-center gap-3 justify-start border border-zinc-500 rounded p-2 bg-gray-200">
              <div className="">
                <IconContext.Provider
                  value={{
                    size: "24px",
                    className: "min-w-[24px]",
                  }}
                >
                  <GoHome />
                </IconContext.Provider>
              </div>
              <p className="font-serif">Dự Án</p>
            </div>
            <div className="flex items-center gap-3 justify-start border border-zinc-500 rounded p-2 bg-gray-200">
              <div className="">
                <IconContext.Provider
                  value={{
                    size: "24px",
                    className: "min-w-[24px]",
                  }}
                >
                  <GoHome />
                </IconContext.Provider>
              </div>
              <p className="font-serif">Tin Tức</p>
            </div>
            <div className="flex items-center gap-3 justify-start border border-[#fb9115] rounded p-2 bg-gray-200">
              <div className="">
                <IconContext.Provider
                  value={{
                    color: "#fb9115",
                    size: "24px",
                    className: "min-w-[24px]",
                  }}
                >
                  <GoHome />
                </IconContext.Provider>
              </div>
              <p className="font-serif text-[#fb9115]">Dịch Vụ</p>
            </div>
            <div className="flex items-center gap-3 justify-start border border-zinc-500 rounded p-2 bg-gray-200">
              <div className="">
                <IconContext.Provider
                  value={{
                    size: "24px",
                    className: "min-w-[24px]",
                  }}
                >
                  <GoHome />
                </IconContext.Provider>
              </div>
              <p className="font-serif">Giới Thiệu</p>
            </div>
            <div className="flex items-center gap-3 justify-start border border-zinc-500 rounded p-2 bg-gray-200">
              <div className="">
                <IconContext.Provider
                  value={{
                    size: "24px",
                    className: "min-w-[24px]",
                  }}
                >
                  <GoHome />
                </IconContext.Provider>
              </div>
              <p className="font-serif">Tuyển Dụng</p>
            </div>
            <div className="flex items-center gap-3 justify-start border border-zinc-500 rounded p-2 bg-gray-200">
              <div className="">
                <IconContext.Provider
                  value={{
                    size: "24px",
                    className: "min-w-[24px]",
                  }}
                >
                  <GoHome />
                </IconContext.Provider>
              </div>
              <p className="font-serif">Liên Hệ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
