import NavBar from "../components/NavBar/NavBar.js";
import { BrowserRouter } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext.js";
import PrivateRouters from "./PrivateRouter.js";
import PublicRouters from "./PublicRouters.js";

const AppRouter = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <NavBar />
            { user.logged ? <PrivateRouters /> : <PublicRouters /> }
        </BrowserRouter>
    );
};

export default AppRouter;