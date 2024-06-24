import { Navigate, createBrowserRouter } from "react-router-dom"
import App from "../../App"
import { Error404 } from "../pages/Error404"
import { BrandPage } from "../pages/BrandPage/BrandPage"
import { Model } from "../pages/Model/Model"
import { Prices } from "../pages/Prices"
import { ProtectedPage } from "../pages/ProtectedPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={"error"} />,
    children: [
      {
        path: "error",
        element: <Error404 />,
      },
      {
        path: ":brand",
        element: <BrandPage />,
      },
      {
        path: ":brand/model/:id",
        element: <Model />,
      },
      {
        path: "prices",
        element: <Prices />,
      },
      {
        path: "protected-page",
        element: <ProtectedPage />,
      },
    ],
  },
])
