import React, { useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({children}) {
    const [check, setCheck] = useState(false);

    return (
        <AuthContext.Provider value={{check, setCheck}}>
            {children}
        </AuthContext.Provider>
    )
}