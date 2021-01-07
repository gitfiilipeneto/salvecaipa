import React from 'react'


const Color ={
    color:"white"
}

const NavBar = () => {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Salvê Caipa</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" ></span>
            </button>
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                <ul class="navbar-nav" >
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Produtos!</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre nós!</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog!</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar