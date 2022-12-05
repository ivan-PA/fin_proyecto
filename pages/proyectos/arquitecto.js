import Headernav from "../componentes/Headernav";
import Image from "next/image";
import Footer from "../Footer";

export default function arquitecto() {
  return <>
    <Headernav />

    <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 lg:grid-cols-2 items-center max-h-min">
      <Image
        className="w-4 h-4 lg:w-20 lg:h-20"
        src={"/images/proyectos/arquitecto.jpg"}
        priority
        width={300}
        height={300}
        alt="Imagen de arquitecto"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%",
          height: "auto"
        }} />
      <div className="pl-10">
        <p className="text-4xl text-black font-bold">
          Bienvenidos a la página de :
        </p>
        <br />
        <p className="text-yellow-400 underline text-6xl font-bold">
          Arquitecto SL.
        </p>
        <br />
        <p className="text-lg text-black py-10">
          Acumulados más de 20 años de experiencia en servicios de
          arquitectura, en el diseño de viviendas, construcción de casas,
          reformas de apartamentos y en la promoción inmobiliaria singular. El
          éxito de nuestros proyectos ha hecho que estén publicados en las
          revistas y libros más relevantes del sector, nacional e
          internacional, pero al mismo tiempo, ese resultado lo conseguimos
          optimizando cada metro cuadrado y ahorrando costes.
        </p>
        <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg mx-auto">
          ACCEDER A SU WEB
        </button>
      </div>
    </div>
    <Footer />
  </>;
}
