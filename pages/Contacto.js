import Headernav from "./componentes/Headernav";
import Footer from "./Footer";
import Image from "next/image";

export default function Contacto() {
  return <>
    <div>
      {/*Cabecera común en todas las páginas */}
      <Headernav />
      {/*Primera parte de la página, PRESENTACIÓN */}
      <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 lg:grid-cols-2 items-center max-h-min min-h-screen">
        <div className="p-10">
          <p className="text-5xl text-black font-bold">
            ¡¡¡Me encanta que hayas llegado hasta aquí!!!
          </p>
          <br />
          <p className="text-lg text-black py-10 ">
            <b className="text-4xl">Datos de contacto:</b>
            <br />
            <br />
            <b>Nombre: </b> Juan Eusebio Pacha Alcalde
            <br />
            <b>Télefono: </b> 693002534
            <br />
            <b>Email: </b> ivanpacha@hotmail.com
            <br />
            <b>Email 2: </b> ivanpacha@gmail.com
            <br />
            <b>Ciudad: </b> Almendralejo (Badajoz)
            <br />
          </p>
        </div>
        <Image
          className="w-4 h-4 lg:w-20 lg:h-20 p-12"
          src={"/images/lupa.png"}
          priority
          width={300}
          height={300}
          alt="Imagen de mensaje"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
    </div>
    <Footer />
  </>;
}
