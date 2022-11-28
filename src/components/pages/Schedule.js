import React from "react";
import '../../App.css'
import Footer from "../Footer";

export default function Schedule() {
    return (
        <>  <div className="schedule-image"></div>
            <div className="schedule">
            <div  className="schedule-container">
             <h1>Dias e Horários</h1>
            
             <div className="schedule-poa">
                <h2>MIP PORTO ALEGRE – RS</h2>
                <p>CULTOS -<br/>
                    DOMINGO: Cultos às 10h e 18h com MIP Kids (escola infantil para as crianças)  <br/>
                    TERÇA-FEIRA: Culto em Inglês às 20h<br/><br/>
                    ATIVIDADES -<br/>
                    QUARTA-FEIRA: MIP Pink às 15h (Célula de Mulheres)  <br/>
                    QUINTA-FEIRA: - MIP Care às 15:30h e 16h (Evangelização nas Clínicas Geriátricas) <br/>
                    - Sala de Oração às 20h <br/>
                </p>
              </div>
            <div className="schedule-alvorada">
                <h2>MIP ALVORADA – RS</h2>
            <p>CULTOS -<br/>
                QUINTA-FEIRA: Culto de Cura e Libertação às 20h<br />
                SEXTA-FEIRA: Culto Jovem às 1930hrs<br />
                DOMINGO: Culto da Família às 19:30h
            </p>
            </div>
             </div>
            </div>
            <Footer/>
            </>
            )
}