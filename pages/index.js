import Headernav from "./componentes/Headernav.js";
import Image from "next/image";
import Footer from "./Footer.js";
import CardOpiniones from "./componentes/CardOpiniones.js";
import CardEmpresas from "./componentes/CardEmpresas.js";
import CardProyecto from "./componentes/CardProyecto.js";
import CardOferta from "./componentes/CardOferta.js";
import Link from "next/link.js";

export default function Home() {
  return (
    <>
      <div>
        {/*Cabecera común en todas las páginas */}
        <Headernav />
        {/*Primera parte de la página, PRESENTACIÓN */}
        <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 lg:grid-cols-2 items-center max-h-min">
          <div className="pl-10">
            <p className="text-6xl text-black font-bold">
              Por fin has llegado
              <span className="text-yellow-400">!!</span>
            </p>
            <br />
            <p className="text-lg text-black py-10">
              Te estaba esperando, voy a resumir en pocas palabras porque te
              interesa mirar mi página.
              <br />
              <br />
              Soy un poco mayor para esta conversión al mundo tecnológico, pero
              entre tú y yo, además de tenacidad, esfuerzo por hacer las cosas
              bien, versatilidad y persistencia, soy una persona muy sociable,
              me encanta aprender y las nuevas experiencias, así que te invito a
              ver mi portafolio y darme la oportunidad de conocernos en persona
              y trabajar codo con codo.
            </p>
            <Link
              href="/Contacto"
              className="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-1"
            >
              {/* <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg pl-10">
              CONTACTO
            </button> */}
              <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg pl-10">
                PONTE EN CONTACTO
              </button>
            </Link>
          </div>
          <Image
            className="w-4 h-4 lg:w-20 lg:h-20"
            src={"/images/ordenador.png"}
            priority
            width={300}
            height={300}
            alt="Imagen de Ordenador"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Segunda parte de la página, OPINIONES */}
        <div className="bg-white">
          <div className="pl-10">
            <p className="text-5xl text-gray-600  font-serif font-bold text-center py-6">
              Opiniones de clientes...
            </p>

            <div className="no-scrollbar flex overflow-x-scroll gap-2 snap-mandatory before:shrink-0 before:w-0 after:shrink-0 after:w-0 pb-10">
              <CardOpiniones
                Name="Alex García García"
                rutaImg="/images/avatares/alex.jpg"
                rutaLogo="/images/google.png"
                fecha="15/08/2021"
                valoracion=" ⭐⭐⭐⭐⭐"
              >
                Buen profesional, entrega a tiempo y buen trabajo. Seguro que
                sus profesores le pusieron un 10 en todo.
              </CardOpiniones>

              <CardOpiniones
                Name="Concha Velasco"
                rutaImg="/images/avatares/concha.jpg"
                rutaLogo="/images/google.png"
                fecha="12/07/2020"
                valoracion=" ⭐⭐⭐⭐⭐"
              >
                La verdad es que hizo un trabajo mejor de lo esperado, aunque
                llevo algo más de tiempo de lo que esperaba el resultado me ha
                gustado y nunca pensé en tener una página web tan profesional
                por ese precio, además de el trato tan amable y cordial que me
                ha dado, lo recomiendo al 100% y sé que la persona que lo
                contrate lo valorará igual que yo.
              </CardOpiniones>

              <CardOpiniones
                Name="Jose Zamorano Pérez"
                rutaImg="/images/avatares/jose.jpg"
                rutaLogo="/images/google.png"
                fecha="11/11/2022"
                valoracion=" ⭐⭐⭐⭐⭐"
              >
                Buen trabajo.
              </CardOpiniones>
              <CardOpiniones
                Name="Julia Roberts"
                rutaImg="/images/avatares/joanna.jpg"
                rutaLogo="/images/google.png"
                fecha="07/03/2021"
                valoracion=" ⭐⭐⭐⭐⭐"
              >
                Buen profesional, recomendable, volvería contratar sin duda.
              </CardOpiniones>

              <CardOpiniones
                Name="Said Hejal"
                rutaImg="/images/avatares/said.jpg"
                rutaLogo="/images/google.png"
                fecha="29/05/2020"
                valoracion=" ⭐⭐⭐⭐⭐"
              >
                Ha cumplido todas mis expectativas, muy simpático y gran
                persona.
              </CardOpiniones>

              <CardOpiniones
                Name="David Civera"
                rutaImg="/images/avatares/david.jpg"
                rutaLogo="/images/google.png"
                fecha="21/10/2022"
                valoracion=" ⭐⭐⭐⭐⭐"
              >
                Muy original, atento y se le nota las ganas de avanzar y que
                avances en tu empresa.
              </CardOpiniones>
            </div>
          </div>
        </div>

        {/*Tercera parte de la página, CLIENTES/COLABORADORES */}
        <div className="bg-white items-center  justify-center tex max-h-min">
          <div className="pl-10">
            <p className="text-5xl text-gray-600  font-serif font-bold text-center py-6">
              Empresas en las que he colaborado...
            </p>

            <div className="no-scrollbar flex overflow-x-auto gap-3 snap-mandatory before:shrink-0 before:w-0 after:shrink-0 after:w-0 pb-10">
              <CardEmpresas
                ruta={[
                  "adZeppelin",
                  "Cuentamas",
                  "Elinker",
                  "gaiaMedia",
                  "GesInformatica",
                  "infotec",
                  "intAplicaciones",
                  "saguard",
                  "TecnoMerida",
                ]}
              />
            </div>
          </div>
        </div>

        {/*Cuarta parte de la página, PROYECTOS */}
        <div className="bg-white items-center flex justify-center">
          <div className="pl-10">
            <p className="text-5xl text-gray-600  font-serif font-bold text-center py-6">
              {"Antes de nada mira algunos de mis "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-tr from-yellow-500 to-slate-400 relative inline-block">
                <span className="relative text-black ">Proyectos</span>
              </span>
            </p>

            <div className=" items-center w-auto h-auto mb-6 snap-x flex flex-col xl:flex-row justify-centerpb-10 gap-4">
              <CardProyecto ruta="proyectos/arquitecto" />
              <CardProyecto ruta="proyectos/artistas" />
              <CardProyecto ruta="proyectos/ordenadores" />
            </div>
          </div>
        </div>

        {/* Quinta parte de la página, OFERTA */}
        <div className="bg-white items-center  justify-center max-h-min">
          <div className="pl-10">
            <p className="text-5xl text-black  font-serif font-bold text-center py-6">
              ¿Que he estudiado?
            </p>
            <p className="text-xl text-gray-400  font-serif font-bold text-center py-6 my-8">
              Un breve repaso de las tecnologías usadas, siempre a falta de
              aprender más.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto py-4">
              <div className="w-80 mx-auto">
                <CardOferta icono="java" titulo="Java" ruta="/Nuevo_Proyecto">
                  He estudiado lenguaje Java en el curso, obteniendo una nota
                  media de 9, aunque no he trabajado luego en empresas,
                  considero que puedo tener una buena curva de adaptación y ser
                  eficiente en poco tiempo.
                </CardOferta>
              </div>

              <div className="w-80 mx-auto">
                <CardOferta
                  icono="html_css"
                  titulo="Html y Css"
                  ruta="/Nuevo_Proyecto"
                >
                  He trabajado con él en prácticas de empresa obteniendo un
                  resultado satisfactorio, si buscas un desarrolador front...
                  ¡¡¡Cuenta conmigo!!!
                </CardOferta>
              </div>

              <div className="w-80 mx-auto">
                <CardOferta icono="next" titulo="Next" ruta="/Nuevo_Proyecto">
                  Tecnología reciente, ya he estado practicando con ella y
                  adaptándome a los cambios que genera los inicios de estas
                  tecnologías.
                </CardOferta>
              </div>

              <div className="w-80 mx-auto">
                <CardOferta
                  icono="js"
                  titulo="JavaScript"
                  ruta="/Nuevo_Proyecto"
                >
                  He trabajado con él en las prácticas, me resulta muy cómodo y
                  muy interesante, me encanta aprender más sobre este lenguaje,
                  no dudes en contar conmigo si necesitas a alguien que no le
                  asusten los retos.
                </CardOferta>
              </div>

              <div className="w-80 mx-auto">
                <CardOferta
                  icono="tailwind"
                  titulo="Tailwind"
                  ruta="/Nuevo_Proyecto"
                >
                  Buena versión para tener atajos de css, he trabajado con ello
                  en las prácticas, me he familiarizado con las sintaxis, así
                  como en los archivos internos para poder modificar y crear
                  clases nuevas.
                </CardOferta>
              </div>

              <div className="w-80 mx-auto">
                <CardOferta icono="react" titulo="React" ruta="/Nuevo_Proyecto">
                  Magnifico complemento a JavaScript, creo que es la relación
                  perfecta para sacar un código eficiente y así trabajar más
                  rápido, me encanta usarlo.
                </CardOferta>
              </div>

              <div className="w-80 mx-auto">
                <CardOferta
                  icono="android"
                  titulo="Andorid"
                  ruta="/Nuevo_Proyecto"
                >
                  Me encanta hacer app, he trabajado con ello en el curso, he
                  sacado una nota de 8 y creo que puedo avanzar y adaptarme muy
                  bien.
                </CardOferta>
              </div>

              <div className="w-80 mx-auto">
                <CardOferta icono="unity" titulo="Unity" ruta="/Nuevo_Proyecto">
                  Aunque en el curso sólo he usado la opción de 2D, obtuve un 10
                  en el examen, me encanta poder crear juegos y creo que unity
                  es una plataforma muy potente para ello.
                </CardOferta>
              </div>

              <div className="w-80 mx-auto">
                <CardOferta
                  icono="git-hub"
                  titulo="GitHub"
                  ruta="/Nuevo_Proyecto"
                >
                  He trabajado con él en prácticas de empresa ya que hacíamos
                  trabajo a distancia, ¡¡¡¡La distancia no es un problema!!!!
                </CardOferta>
              </div>
            </div>
          </div>
          <div className="h-1 bg-zinc-300 w-4/5 m-auto rounded-full" />
        </div>

        {/*Esto es el componente de la clase Footer */}
        <Footer />
      </div>
    </>
  );
}
