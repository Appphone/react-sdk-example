import React from "react";
import { useAppSelector } from "../../store/hooks";
import LoggedScreen from "./LoggedScreen";

const LoggedScreenConnect: React.FC = () => {
    const type = useAppSelector((state) => state.activeScreenType);

    return <LoggedScreen type={type} />;
};

export default LoggedScreenConnect;
