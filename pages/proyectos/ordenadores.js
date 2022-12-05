import Headernav from "../componentes/Headernav";
import Image from "next/legacy/image";
import Footer from "../footer";

export default function ordenadores() {
  return (
    <>
      <Headernav />

      <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 lg:grid-cols-2 items-center max-h-min">
        <Image
          className="w-4 h-4 lg:w-20 lg:h-20"
          src={"/images/proyectos/ordenadores.jpg"}
          priority
          width={300}
          height={300}
          alt="Imagen de ordenadores"
          layout="responsive"
        />
        <div className="pl-10">
          <p className="text-4xl text-black font-bold">
            Bienvenidos a la página de :
          </p>
          <br />
          <p className="text-yellow-400 underline text-6xl font-bold">
            ordenadores SL.
          </p>
          <br />
          <p className="text-lg text-black py-10">
            Empresa de servicios informáticos especializada en la reparación de
            ordenadores.Nuestro objetivo es conseguir que quede satisfecho con
            nuestro trabajo y que la relación comercial se mantenga en el
            tiempo. De esta forma miles de clientes ya confían en nosotros y
            nuestros servicios. Además nuestros presupuestos son rápidos y sin
            compromiso.
          </p>
          <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg mx-auto">
            ACCEDER A SU WEB
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
