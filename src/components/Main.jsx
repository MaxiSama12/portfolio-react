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
      <div className="text-center my-5">
        <h2>Proyectos</h2>
      </div>
      <section className="experiencia">
        <article className="cardProyecto">
          <article className="imgProyectoReposteria"></article>
          <article>
            <h3>
              <u>
                <a
                  href="https://reposteriaplazasrl.netlify.app/"
                  target="_BLANK"
                >
                  Reposteria Plaza
                </a>
              </u>
              <br />
              Estado: terminado
            </h3>
            <p>
              Landing page desarrollada para promocionar los productos gastronómicos
              de "Reposteria Plaza", con un diseño agradable a la vista y llamativo
              para los clientes.
            </p>
          </article>
        </article>

        <article className="cardProyecto">
          <article className="imgProyectoBlog"></article>

          <article>
            <h3>
              <u>
                <a
                  href="https://candid-cendol-144aa4.netlify.app/"
                  target="_BLANK"
                >
                  Blog de Café
                </a>
              </u>
              <br />
              Estado: Terminado.
            </h3>
            <p>
              Web estática desarrollada para informar sobre los beneficios del café, para
              brindar consejos y cursos sobre sus distintas formas de preparación.
            </p>
          </article>
        </article>

        <article className="cardProyecto">
          <article className="imgProyectoControlador"></article>

          <article>
            <h3>
              <u>Controlador de Stock</u> <br />
              Estado: En proceso...
            </h3>
          
            <p>
             Aplicación de escritorio con el propósito de organizar
             los movimientos de stock de una tienda de calzados,
             registrando ingresos y egresos, además de gestionar el stock
             disponible de cada producto.
            </p>
          </article>
        </article>
      </section>
    </>
  );
};

export default Main;
