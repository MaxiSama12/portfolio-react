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
          <div id="soft_Skills"></div>
      </div>

      <div className="habilidades">
        <SoftSkills />
        <Estudios />
      </div>
        <div ></div>

      <div className="text-center my-5 proyectosTitulo" >
        <h2 >Proyectos</h2>
      </div>

      <section className="proyectos">
        <article className="cardProyecto">
          <article className="imgProyectoReposteria"></article>
          <article>
            <h3>
              <u>
                <a
                  href="https://reposteriaplazasrl.netlify.app/"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  Reposteria Plaza
                </a>
              </u>
              <br />
              Estado: terminado.
            </h3>
            <p>
              Landing page desarrollada para promocionar los productos
              gastronómicos de "Reposteria Plaza", con un diseño agradable a la
              vista y llamativo para los clientes.
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
                  rel="noreferrer"
                >
                  Blog de Café
                </a>
              </u>
              <br />
              Estado: Terminado.
            </h3>
            <p>
              Web estática desarrollada para informar sobre los beneficios del
              café, para brindar consejos y cursos sobre sus distintas formas de
              preparación.
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
              Aplicación de escritorio con el propósito de organizar los
              movimientos de stock de una tienda de calzados, registrando
              ingresos y egresos, además de gestionar el stock disponible de
              cada producto.
            </p>
          </article>
        </article>
      </section>
       
    <div id="experiencia" className="my-5 x"></div>
      <section >

      <h2 className="text-center" >Experiencia Laboral</h2>
      <div class="timeline">
        <div class="timeline-item left">
          <div class="content">
            <div class="job-title">Desarrollador Back End</div>
            <div class="job-company">Globant</div>
            <div class="job-dates">Febrero 2023 - Actualidad</div>
            <p>
              Trabajé desarrollando APIs, microservicios y dando mantenimiento a
              la infraestructura de sistemas, con buenas practicas y seguimiento
              constante.
            </p>
          </div>
        </div>

        <div class="timeline-item right">
          <div class="content">
            <div class="job-title">Analista de Sistemas</div>
            <div class="job-company">Baufest</div>
            <div class="job-dates">Enero 2021 - Diciembre 2022</div>
            <p>
              Me encargué de levantar los requerimentos de los usuarios
              operacionales y identifiqué limitantes para la realización de
              proyectos empresariales importantes.
            </p>
          </div>
        </div>

        <div class="timeline-item left">
          <div class="content">
            <div class="job-title">Soporte IT</div>
            <div class="job-company">Prex</div>
            <div class="job-dates">Enero 2018 - Diciembre 2020</div>
            <p>
              Desempeñé el rol de soporte respondiendo consultas y resolviendo
              los problemas de los clientes de la empresa.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Main;