import React from 'react'

const Estudios = () => {
  return (
    <>
    <div className='contenedorHabilidades'>
          <h3><b>Estudios formales</b></h3>
              <ul>
              {[
                'Estudié durante 2 años la Tecnicatura Universitaria en Programación en la UTN-FRT, donde adquirí experiencia desarrollando software de calidad con mis compañeros.'
              ].map((estudios) => (
                
                <p><b>{estudios}</b></p>
                
              ))}
              </ul>
        </div>
    </>
  )
}

export default Estudios