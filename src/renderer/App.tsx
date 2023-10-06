import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WindowControls from "./Components/WindowControls/WindowControls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
]);

const App = () => {
  return (
    <>
      <WindowControls />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
