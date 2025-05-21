import './assets/styles/main.scss';
import App from "./layout/App.jsx";
import HomePage from "./pages/HomePage.jsx";
import HousingPage from "./pages/HousingPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { createBrowserRouter } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },{
                path: 'housing/:id',
                element: <HousingPage/>,
            },{
                path: 'about',
                element: <AboutPage/>,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
