import React, { useContext } from "react";
import plusImg from "../assets/plus.png";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border border-maroon-800 p-2 rounded-full flex items-center shadow-md hover:shadow-xl"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="text-maroon-800 pl-3 pr-7"> Create</span>
    </button>
  );
}
