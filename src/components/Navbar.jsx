import React from 'react';

const Navbar = ()=> {
    return (
        <nav className="navbar sticky-top shadow-lg">

        <h1 id="nickWuerz" class="navbar-brand">NICK WUERZ</h1>
        <p id="apc">
            <a href="/">About</a>
            |
            <a href="/portfolio">Portfolio</a>
            |
            <a href="/contact">Contact</a>
        </p>

    </nav>
    )
}

export default Navbar;