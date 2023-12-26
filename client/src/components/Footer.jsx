import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
        <img src={Logo} alt="Logo" />
        <span>Made on © 2023. <b>React + Node + MongoDB</b>.</span>
    </footer>
  )
}

export default Footer