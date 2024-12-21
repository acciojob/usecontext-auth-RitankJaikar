import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Auth() {
    const {check, setCheck} = useContext(AuthContext);

    return (
        <div>
            <h1>Click on the checkbox to get authenticated</h1>
            <p className="authText">{check ? "You are now authenticated, you can proceed" : "you are not authenticated"}</p>
            <input type="checkbox" id="checkbox" value={check} onChange={() => setCheck(!check)} />
            <label htmlFor="checkbox">I'm not a robot</label>
        </div>
    )
}