import Headernav from "../componentes/headernav";
import Footer from "../footer";
import Image from "next/image";

export default function Empresa4() {
  return (
    <>
      <div>
        {/*Cabecera común en todas las páginas */}
        <Headernav />
        {/*Primera parte de la página, PRESENTACIÓN */}
        <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 lg:grid-cols-2 items-center max-h-min min-h-screen">
          <div className="p-10">
            <p className="text-6xl text-black font-bold">ad Zeppelin</p>
            <br />
            <p className="text-lg text-black py-10">
              Agencia para grandes ideas
              <br />
              <br />
              AD ZEPPELIN nace con las enormes ganas de dar, a la pequeña y
              mediana empresa, soluciones creativas a la comunicación de sus
              negocios con servicios de marketing. Además, desmitificamos que el
              marketing sea para grandes empresas y superficies. Apostamos por
              la digitalización y la presencia online como modo de
              funcionamiento eficiente en la nueva Era Digital donde, además, tu
              imagen vale más que mil palabras. Por eso te ofrecemos diseños
              profesionales, herramientas de última generación y las técnicas de
              marketing que utilizan las grandes empresas.
            </p>
            <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg pl-10">
              VER PÁGINA WEB
            </button>
          </div>
          <Image
            className="w-4 h-4 lg:w-20 lg:h-20 p-12"
            src={"/images/empresas/adZeppelin.png"}
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
}
