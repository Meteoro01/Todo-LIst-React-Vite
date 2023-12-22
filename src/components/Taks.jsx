import React, { useState } from "react";

const Taks = ({ task, onDelete, index, onEdit }) => {
  const [estEdit, setEstEdit] = useState(false);
  const [newTaks, setnewTaks] = useState(task);

  const changeStatus = () => {
    if (estEdit) {
      onEdit(index, newTaks);
    }
    setEstEdit(!estEdit);
  };
  // console.log(estEdit)
  return (
    <div
      className="container-tasks flex my-4 mx-5  rounded-[50px] "
      key={index}
    >
      <div className="check-task w-[10%] flex justify-center  ">
        {/* <input type="checkbox" name="" id="" /> */}
      </div>
      <div className="content-task w-[60%] flex items-center">
        {estEdit ? (
          <input
            type="text"
            value={newTaks}
            onChange={(e) => setnewTaks(e.target.value)}
            className="p-taks text-left white-space-break-word w-[90%] p-2  bg-transparent border-current border-2 border-black"
          />
        ) : (
          <p className="p-taks text-left white-space-break-word">{task}</p>
        )}
      </div>
      {/* buttons */}
      {estEdit ? (
        <div className=" w-[30%] p-auto rounded-[50px] bg-black flex justify-center items-center">
          <button
            className="mx-auto text-2xl text-white  h-full"
            onClick={changeStatus}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="m243.28 68.24l-24-23.56a16 16 0 0 0-22.58 0L104 136l-.11-.11l-36.64-35.27a16 16 0 0 0-22.57.06l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0l128.4-128.38a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24l.11.11l36.64 35.27a16 16 0 0 0 22.52 0L208.06 56L232 79.6Z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className=" w-[30%] flex justify-center rounded-[50px] bg-black">
          <div className="flex justify-center items-center">
            <div className="delete-taks p-2">
              <button
                className="flex items-center"
                onClick={() => onDelete(task)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white text-[22px]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1l1.4 1.4ZM7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM7 6v13V6Z"
                  />
                </svg>
              </button>
            </div>

            <div className="edit-tasks p-2">
              <button className="flex items-center" onClick={changeStatus}>
                <svg
                  className="text-white text-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.588 1.413T19 21H5Zm7-9Zm-3 2v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.138.738t-.437.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.713-.288T9 14Zm12.025-9.6l-1.4-1.4l1.4 1.4ZM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575V13Zm6.5-6.5l-.725-.7l.725.7l.7.7l-.7-.7Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Taks;
