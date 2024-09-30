import { useSelector } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: "<div></div>",
  },
  {
    path: "/pastes",
    element: "<div></div>",
  },
  {
    path: "/pastes/:id",
    element: "<div></div>",
  },
]);

function App() {
  // <Routes>
  //   <Route path="/" element={<Home />} />
  //   <Route path="/about" element={<About />} />
  //   <Route path="/users" element={<Users />} />
  // </Routes>;

  return (
    <>
      <div>Sachin</div>
    </>
  );
}

export default App;
