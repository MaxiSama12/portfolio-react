function BgColorExample() {
  return (
    <>
        <div className='contenedorHabilidades'>
          <h3><b>Habilidades blandas</b></h3>
              <ul>
              {[
                'Respetuoso',
                'Buen trabajo en equipo',
                'Pensamiento técnico',
                'Comprensivo',
                'Responsable',
                'Proactivo',
                'Inglés B1+'
              ].map((cualidades) => (
                
                <li><b>{cualidades}</b></li>
                
              ))}
              </ul>
        </div>
    </>
  );
}

export default BgColorExample;
