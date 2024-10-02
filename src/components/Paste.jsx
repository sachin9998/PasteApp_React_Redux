import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromPastes } from "../Redux/pasteSlice";

const Paste = () => {
  const pastes = useSelector((state) => state.pastes.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  };

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    toast.success("Copied to Clipboard");
  };

  return (
    <div>
      <input
        className="p-2 border m-4 rounded-xl min-w-[70%]"
        type="text"
        placeholder="Search Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h1 className="text-2xl">All Pastes</h1>

      <div className="flex flex-col gap-5 mt-5">
        {/* {pastes.map((paste) => {
          return (
            <div className="card" key={paste._id}>
              <div>
                <h1>{paste.title}</h1>

                <div>btn</div>
              </div>

              <div>
                <div>{paste.content}</div>
                <div>{paste.createdAt}</div>
              </div>
            </div>
          );
        })} */}

        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div className="border border-red-300" key={paste._id}>
                <div>{paste.title}</div>

                <div>{paste.content}</div>

                <div className="flex flex-row gap-4 place-content-evenly">
                  
                  <button className="border border-red-950">
                    <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                  </button>

                  <button className="border border-red-950">
                    <Link to={`/pastes/${paste?._id}`}>View</Link>
                  </button>

                  <button
                    onClick={() => handleDelete(paste._id)}
                    className="border border-red-950"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleCopy(paste.content)}
                    className="border border-red-950"
                  >
                    Copy
                  </button>

                  <button className="border border-red-950">Share</button>
                </div>

                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
