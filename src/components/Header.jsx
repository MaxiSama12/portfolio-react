import '../styles/Header.css'
import Navegador from './Navegador'

const Header = () => {
  //Nombre del alumno: Samaniego Esteban Maximiliano. 
  //LEGAJO: 61468.
  return (
    <>
    <div  id='sobre_Mi'></div>
    <div className='centrador navegador'>
    <Navegador/>
    </div>
    <div className='contenedorHeader' >


      <div className='fotoPortada'>

      </div>
      

      <div className='txtTitulo'>
      <p><b>¡Hola!, soy<u className='colorRojo'> Esteban Samaniego,</u></b></p>
      <h1>Desarrollador <b><u className='colorRojo'><br />Full Stack.</u></b></h1>
      </div>
    
    </div>

    </>
  )
}

export default Header