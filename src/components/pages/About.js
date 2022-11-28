import React from "react";
import '../../App.css'
import Footer from "../Footer";

export default function About() {
    return (
            <>
            <div className="about-image"></div>
            <div className="about">
            <div className="about-container">
            <h1>Enderecos</h1>
                <h2>MIP PORTO ALEGRE:</h2>
            <p> 
                Rua Cap Pedro Werlang 923, Intercap – Porto Alegre – RS<br />
                 <br />
            </p>
             <h2>MIP ALVORADA:</h2>
            <p> Rua Porto Rico, 682, Sumaré – Alvorada – RS <br /> <br /></p>
            <h1>Contatos</h1>
             <h2>Email:</h2> 
             <p>contato@mipchurch.com.br</p>
             <h2>Pr. Marcio:</h2> 
             <p> 51 98284-5496 </p>
             <h2>Pr. Moises</h2> 
             <p> 51 98538-4053 </p>
            </div>
            </div>
            <Footer />
            </>
            )
}