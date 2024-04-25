   import React from 'react'
   // imagens
   import Logo from './assets/img/logo.svg'
   //style
   import './Navbar.css'
   // components
   import Button from './Button';
   import Video from './assets/video/god-of-war.mp4'
   const Navbar = ( ) =>{
    return(
        <header>

       <nav>
        <img src={Logo} className='logo' alt="logo" />
       <div id="links">
       <li> <a href=""> VÍDEOS E TELAS</a> </li>
        <li> <a href=""> BASTIDORES</a> </li>
        <li> <a href="">COMUNIDADE</a> </li>
        <Button onClick={()=>{
            
        }} className='button_compra1'>COMPRE AGORA</Button>
       </div>
       <div className='divh1'>
       <h1>Um mundo mais sombrio e primitivo</h1>
        <p>Do mármore e colunas ornadas do Ólimpo para as florestas, este é um reino novo, 
            com suas prórpias espécies de criaturas, monstros e deuses </p>
            <div className="btns">
            <Button className='button_compra2'>COMPRE AGORA</Button>
            <Button className='btn_saiba'>SAIBA MAIS</Button>
            </div>

            <div className="container_video">
            <video autoplay muted controls>
            <source src={Video} type="video/mp4" />
            </video>
            </div>
       </div>
       </nav>
    </header>
    )
   }
   export default Navbar;