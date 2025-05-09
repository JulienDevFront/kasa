import { createBrowserRouter } from "react-router-dom";
import App from "./layout/App.jsx";
import HomePage from "./pages/HomePage.jsx";
import HousingPage from "./pages/HousingPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },{
                path: 'housing',
                element: <HousingPage/>,
            },{
                path: 'about',
                element: <AboutPage/>,
            },{
                path: 'error',
                element: <ErrorPage/>,
            },
        ],
    },
]);