import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../errorPage/ErrorPage";
import OurServices from "../pages/OurServices";
import ViewServiceDetails from "../pages/ViewServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Shop from "../pages/Shop";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/UserDashboard/Cart";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddService from "../pages/Dashboard/AdminDashboard/AddService";
import AddProduct from "../pages/Dashboard/AdminDashboard/AddProduct";
import AllOrders from "../pages/Dashboard/AdminDashboard/AllOrders";
import AddReview from "../pages/Dashboard/UserDashboard/AddReview";
import AllProducts from "../pages/Dashboard/AdminDashboard/AllProducts";
import AllServices from "../pages/Dashboard/AdminDashboard/AllServices";
import UpdateProduct from "../pages/Dashboard/AdminDashboard/UpdateProduct";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/ourServices",
                element: <OurServices />
            },
            {
                path: "/ourServices/:id",
                element: <PrivateRoute>
                    <ViewServiceDetails />
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/shop",
                element: <Shop />
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute>
            <Dashboard />
        </PrivateRoute>,
        children: [
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "addReview",
                element: <AddReview />
            },

            // admin routes
            {
                path: "allUsers",
                element: <AdminRoute>
                    <AllUsers />
                </AdminRoute>
            },
            {
                path: "addService",
                element: <AdminRoute>
                    <AddService />
                </AdminRoute>
            },
            {
                path: "addProduct",
                element: <AdminRoute>
                    <AddProduct />
                </AdminRoute>
            },
            {
                path: "allOrders",
                element: <AdminRoute>
                    <AllOrders />
                </AdminRoute>
            },
            {
                path: "allProducts",
                element: <AdminRoute>
                    <AllProducts />
                </AdminRoute>
            },
            {
                path: "allServices",
                element: <AdminRoute>
                    <AllServices />
                </AdminRoute>
            },
            {
                path: "updateProduct/:id",
                element: <AdminRoute>
                    <UpdateProduct />
                </AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    }
])
