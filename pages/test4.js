import React from "react";
import Link from "next/link";

export default function Test4() {
  return (
    <div className="mx-auto h-screen overflow-hidden">
      <div className="w-full flex items-start justify-center mt-14 mb-10">
        <h2 className="text-2xl uppercase font-semibold">
          Một số dự án đã làm
        </h2>
      </div>
      <div className="container mx-auto flex justify-center  items-center gap-6">
        <Link
          className="border-2 border-gray-600 p-2 rounded-lg bg-slate-200 hover:bg-slate-300"
          href={"https://www.kartracingleague.com/"}
          target={"_blank"}
        >
          Kart Racing League
        </Link>
        <Link
          className="border-2 border-gray-600 p-2 rounded-lg bg-slate-200 hover:bg-slate-300"
          href={"https://invest.wildthunder.studio/"}
          target={"_blank"}
        >
          WTT Token
        </Link>
        <Link
          className="border-2 border-gray-600 p-2 rounded-lg bg-slate-200 hover:bg-slate-300"
          href={"https://www.realmsofethernity.com/"}
          target={"_blank"}
        >
          Realm Of Ethernity
        </Link>
      </div>
    </div>
  );
}
