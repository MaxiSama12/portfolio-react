import "../styles/Main.css";
import SoftSkills from "./SoftSkills";
import Estudios from "./Estudios";

const Main = () => {
  return (
    <>
      <div className="presentacion">
        <article>
          <h2>Sobre Mí</h2>
          <p>
            <b>
              Estudiante de programación en la Facultad Regional Tucumán. Gané
              experiencia desarrollando proyectos prácticos y eficientes, <br />
              solucionando problemas y automatizando procesos repetitivos,
              aumentando la productividad de los usuarios en tareas mas
              importantes.
            </b>
          </p>
        </article>
      </div>
      <div className="habilidades">
        <SoftSkills />
        <Estudios />
      </div>
    </>
  );
};

export default Main;
