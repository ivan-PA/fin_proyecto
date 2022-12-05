import Headernav from "../componentes/Headernav";
import Footer from "../Footer";
import Image from "next/image";

export default function Empresa1() {
  return (
    <>
      <div>
        {/*Cabecera común en todas las páginas */}
        <Headernav />
        {/*Primera parte de la página, PRESENTACIÓN */}
        <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 lg:grid-cols-2 items-center max-h-min min-h-screen">
          <div className="p-10">
            <p className="text-6xl text-black font-bold">GesInformática</p>
            <br />
            <p className="text-lg text-black py-10">
              Empresa dedicada a la reparación de componentes informáticos.
              <br />
              <br />
              Ges informática proporciona soluciones tecnológicas y servicios
              informáticos orientadas a todos los niveles, desde particulares a
              empresas e instituciones públicas.
            </p>
            <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg pl-10">
              VER PÁGINA WEB
            </button>
          </div>
          <Image
            className="w-4 h-4 lg:w-20 lg:h-20 p-12"
            src={"/images/empresas/GesInformatica.png"}
            priority
            width={200}
            height={200}
            alt="Imagen de Bombilla"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
