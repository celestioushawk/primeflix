import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import SingleMovie from "./SingleMovie";

const Body = () => {

    // First thing should be hooks
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: '/movie/:movieId',
            element: <SingleMovie />
        }
    ])

    return (
        <main className="inter">
            <RouterProvider router={appRouter} />
        </main>
    );
}

export default Body;