import React, { useState } from "react";
import "./Footer.css"
import { Link } from "react-router-dom";
import gitHub from "./github.png"
import linkted from "./linkted.png"




function Footer() {


    return (
        <footer className="footer text-center py-1">

            <div><strong className="text-white">&#169; 2023</strong></div>
            <div className="text-white"><strong>Kontakt: </strong>
                
                    <a className="footer-email text-decoration-none text-white" href="mailto:m.matyas.m@gmail.com">m.matyas.m@gmail.com</a>
                
            </div>

            <div className="text-white"><strong>Sociální sítě</strong>
                <div className="socialButtons">
                    <a target="_blank" href="https://github.com/MiMatyas"><img src={gitHub} className="footer-icons" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/mirek-matyas-83153917b"><img src={linkted} className="footer-icons" /></a>
                </div>
            </div>


        </footer>
    )
}
export default Footer