import React from "react";
import { useEffect, useState, useRef } from "react";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // Do what you want to handle in the callback
        callback();

        // Enable scroll when the component is closed
        document.body.style.overflowY = "auto";
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
};

export default function Test3() {
  const [showPopup, setShowPopup] = useState(false);

  const popupRef = useRef(null);
  useOutsideClick(popupRef, () => {
    setShowPopup(false);
  });
  return (
    <div className="relative z-10 mx-auto h-screen overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <button
          type="btn"
          className="border rounded-lg p-2 bg-neutral-400"
          onClick={() => setShowPopup(true)}
        >
          Click here
        </button>
      </div>
      <div
        className={`fixed w-full h-full top-0 left-0 bg-black opacity-50 z-30 transition-all duration-300 ${
          showPopup ? "visible" : "invisible"
        }`}
      ></div>
      <div
        className={`absolute top-0 bottom-0 right-0 left-0 m-auto w-[500px] h-[250px] bg-white z-50 flex items-center justify-center rounded-lg transition-all duration-300 ${
          showPopup ? "visible" : "invisible"
        }`}
        ref={popupRef}
      >
        <h1 className="text-[60px]">Thanks you!</h1>
      </div>
    </div>
  );
}
