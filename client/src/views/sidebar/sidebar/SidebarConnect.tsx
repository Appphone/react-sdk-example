import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { signOut } from "../../../store/reducer";
import Sidebar from "./Sidebar";

const SidebarConnect: React.FC = () => {
    const dispatch = useAppDispatch();

    return <Sidebar onSignOut={() => dispatch(signOut())} />;
};

export default SidebarConnect;
