import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const DragDrop = () => {
  const [first, setfirst] = useState(second);
  return (
    <div className="min-h-screen flex flex-col items-center justify-start min-w-full">
      <h1 className="text-center p-4 bg-gray-100 font-bold">DragDrop</h1>

      <DragDropContext></DragDropContext>
    </div>
  );
};

export default DragDrop;
