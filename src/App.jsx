import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Entry from "./pages";
import Home from "./pages/Home";

const router = createBrowserRouter([
  { path: "/", Component: Entry },
  { path: "/home", Component: Home },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;