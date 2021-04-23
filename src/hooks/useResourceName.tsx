import { useState } from "react";

const useResourceName = (initialName: string = "") => {
    const [name, setName] = useState(initialName);
    const [error, setError] = useState<string>();

    const validate = (name: string) => {
        setName(name);

        if (!/^[a-zA-Z0-9-]+$/.test(name)) {
            setError("Please use only alphanumeric characters, without spaces");
        } else if (name.length > 20) {
            setError("Please don't use more than 20 characters");
        } else {
            setError(undefined);
        }
    };

    return { name, setAndValidateName: validate, error };
};

export default useResourceName;
