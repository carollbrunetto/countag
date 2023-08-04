import React from "react";
import Historico from "../Pages/Historico";

function Navbar() {

    return (

        <nav className='navbar navbar-expand-lg'>
            <a className='navbar-brand' href='#'>&lt;countag/&gt;</a>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#conteudoNavbarSuportado"
            aria-controls="conteudoNavbarSuportado"
            aria-expanded="false"
            aria-label="Alterna navegação"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home 
                        </a>
                    </li>

                    <li>
                        <p>.</p>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href={'/historico'}>
                            Histórico 
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;