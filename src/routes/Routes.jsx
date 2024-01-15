import { createBrowserRouter } from "react-router-dom";
import Index from "../page/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);