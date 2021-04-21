import { useState } from "react";

const useToggle = (initialState: boolean) => {
    const [isOn, setIsOn] = useState<boolean>(initialState);

    const setOn = () => {
        setIsOn(true);
    };

    const setOff = () => {
        setIsOn(false);
    };

    const onToggle = () => {
        setIsOn(!isOn);
    };

    return { isOn, setOn, setOff, onToggle };
};

export default useToggle;
