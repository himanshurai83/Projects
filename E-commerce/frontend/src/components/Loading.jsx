import React from "react";

function Loading() {
  return (
    <div className="flex w-full h-[70vh] justify-center items-center">
      <div className="border-4 border-gray-200 border-t-blue-500 border-r-blue-500 rounded-full w-14 h-14 animate-spin"></div>
    </div>
  );
}

export default Loading;
