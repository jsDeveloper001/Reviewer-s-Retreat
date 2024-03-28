import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center items-center h-screen">
            <div id="error-page" className="text-center">
                <h1 className="text-6xl font-bold mb-4">Oops!</h1>
                <p className="text-2xl font-medium mb-4">Sorry, an unexpected error has occurred.</p>
                <p className="text-lg font-semibold">
                    <i>404. Page not found</i>
                </p>
                <NavLink to={'/'}><button className="btn mt-4 primary-bg text-white font-bold">Go Home</button></NavLink>
            </div>
        </div>
    );
}
export default ErrorPage