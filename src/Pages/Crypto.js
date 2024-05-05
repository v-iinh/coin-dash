import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import CryptoTable from "../Components/CryptoTable";

function Crypto() {
    useEffect(() => {
        document.getElementById("crypto").style.color = "#5fffff";
        return () => {
            document.getElementById("crypto").style.color = "";
        };
    }, []);

    return (
        <div>
            <Navbar/>
            <CryptoTable/>
        </div>
    );
}

export default Crypto;
