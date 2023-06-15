import React from 'react';
import App from '../App.css'

function Footer() {
    const year = new Date();
    const fullYear=year.getFullYear();
    return (
        <footer>
          <p>Copyright @ {fullYear}</p>  
        </footer>
    );
}

export default Footer;