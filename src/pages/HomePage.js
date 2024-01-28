import React from "react"
import '../styles/components/pages/HomePage.css'


const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="public/images/logo.png" alt="Logo de la empresa" />

            </div>
            <div className="colunas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi.
                    </p>
                    <span>
                        prototype Ride is only way
                    </span>
                </div>
                <div>
                                       
                        <span className="cita">minimalist style</span>
                    
                </div>
            </div>
        </main>
    )
}
export default HomePage;