import React, {Component} from "react";
import Parser from 'html-react-parser';

class Menu extends Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        let classMenu = this.props.classMenu
        let idMenu = this.props.idMenu

        return (
             <header>
                <nav class="fixed-bar  header-sticky menu animated-quick fadeOutUp" id="mainNav">
                    <a class="navigation__link" href="#1_artwork">ARTWORK</a>
                    <a class="navigation__link" href="#2_about">ABOUT</a>
                    <a class="navigation__link" href="#3_connect">CONNECT</a>
                </nav>
             </header>
        )
    }
}

export default Menu