/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <p className="text-center"> <span className="loading loading-infinity loading-lg text-center"></span> </p>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to='/'></Navigate>
};

export default AdminRoute;