import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () =>{
    const brandstyle = {

        color:'#fff',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'22px',
        display:'flex',
        felxItems:'center'

    }

    const logotext = {
        marginLeft:'10px'
    }

    return (
        <nav className={`${styles.navbar} container`}>
       <Link to="/" style={brandstyle}>
           <img src="/images/logo.png" alt="logo" width="30"/>
           <span style={logotext}>Chathouse</span>
           </Link>
        </nav>
    )
}
export default Nav