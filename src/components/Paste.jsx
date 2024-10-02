import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Paste = () => {
  const pastes = useSelector((state) => state.pastes.pastes);
  console.log(pastes);

  const dispatch = useDispatch();

  const filterData = ;

  // const [data, setData] =

  return (
    <div>
      <h1>All Pastes</h1>

      <div className="cards">
        {pastes.map((paste) => {
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
        })}
      </div>
    </div>
  );
};

export default Paste;
