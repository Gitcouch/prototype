import React from "react"
import '../styles/components/pages/HomePage.css'


const HomePage = (props) => {
    return (
        <main>
            <img src="/images/Home.png" alt="prototype" />
            <div className="colunas">
                <div className="bienvenidos">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi.
                    </p>
                </div>
                <div>
                    <span className="cita">prototype Ride is only way</span>
                </div>
            </div>
        </main>
    )
}
export default HomePage;