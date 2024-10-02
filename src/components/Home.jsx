import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../Redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // updating the paste
      dispatch(updateToPastes(paste));
    } else {
      // create paste
      dispatch(addToPastes(paste));
      3;
    }

    // after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-xl border mt-2 w-[80%]"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="p-2 rounded-xl mt-2 border" onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>

      <div className="mt-8">
        <textarea
          value={value}
          placeholder="Enter Content Here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
          className="border rounded-xl mt-4 min-w-[500px] p-4"
        />
      </div>
    </div>
  );
};

export default Home;
