import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import RootLayout from "./pages/Layout";
import StockItems from "./pages/StockItems";
import AllItems from "./components/AllItems";
import NewItem from "./components/NewIten";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/stockItems",
        element: <StockItems />,
        children: [
          {
            path: "/stockItems/allItens",
            element: <AllItems />,
          },
          {
            path: "/stockItems/newItem",
            Element: <NewItem />,
          },
        ],
      },
    ],
  },
]);

export default router;
