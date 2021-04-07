import { useState } from "react";

const useToggle = (initialState: boolean) => {
    const [isOn, setIsOn] = useState<boolean>(initialState);

    const toggle = () => {
        setIsOn(!isOn);
    };

    return { isOn, toggle };
};

export default useToggle;
