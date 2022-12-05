import Headernav from "../componentes/headernav";
import Footer from "../footer";
import Image from "next/image";

export default function Empresa3() {
  return (
    <>
      <div>
        {/*Cabecera común en todas las páginas */}
        <Headernav />
        {/*Primera parte de la página, PRESENTACIÓN */}
        <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 lg:grid-cols-2 items-center max-h-min min-h-screen">
          <div className="p-10">
            <p className="text-6xl text-black font-bold">Saguaro</p>
            <br />
            <p className="text-lg text-black py-10">
              GANA VISIBILIDAD EN INTERNET COMUNICANDO LOS VALORES DE TU NEGOCIO
              <br />
              <br />
              Creamos estrategias de marketing efectivas comunicando lo que tu
              empresa necesita desde el corazón, te ayudamos a conseguir tus
              objetivos y establecer relaciones honestas y duraderas con tus
              clientes
            </p>
            <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg pl-10">
              VER PÁGINA WEB
            </button>
          </div>
          <Image
            className="w-4 h-4 lg:w-20 lg:h-20 p-12"
            src={"/images/empresas/saguard.png"}
            priority
            width={300}
            height={300}
            alt="Imagen de Bombilla"
            layout="responsive"
          />
        </div>
      </div>
      <Footer />
    </>
  );
  s;
}
