import Headernav from "./componentes/Headernav";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";

export default function Sobremi() {
  return (
    <>
      <div>
        {/*Cabecera común en todas las páginas */}
        <Headernav />
        {/*Primera parte de la página, PRESENTACIÓN */}
        <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 lg:grid-cols-2 items-center max-h-min min-h-screen">
          <div className="p-10">
            <p className="text-5xl text-yellow-300 font-bold">
              Juan E. Pacha Alcalde
            </p>
            <br />
            <p className="text-lg text-black py-10">
              Soy una persona dinámica, me encanta aprender, participar y
              relacionarme con los demás, tengo aficiones varias pero sobre todo
              saber curiosidades, considero que puedo añadir un valor humano a
              la empresa.
              <br />
              <br />
              Aquí tengo que poner algo que venda más mi cv
            </p>
            <Link
              href="/Contacto"
              className="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-1"
            >
              <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg pl-10">
                CONTACTO
              </button>
            </Link>
          </div>
          <Image
            className="w-4 h-4 lg:w-20 lg:h-20 p-12"
            src={"/images/fotoCV.png"}
            priority={true}
            width={300}
            height={300}
            alt="Imagen de Bombilla"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
