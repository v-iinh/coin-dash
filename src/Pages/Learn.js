import React, { useEffect } from "react";
import Navbar from '../Components/Navbar';
import LearnPage from "../Components/LearnPage";

function Learn() {
    useEffect(() => {
        document.getElementById("learn").style.color = "#5fffff";
        return () => {
            document.getElementById("learn").style.color = "";
        };
    }, []);

    return (
        <div className="Learn">
            <Navbar/>
            <LearnPage/>
        </div>
    );
}

export default Learn;
