import Headernav from "./componentes/headernav";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";

export default function GitHub() {
  return (
    <>
      <div>
        {/*Cabecera común en todas las páginas */}
        <Headernav />
        {/*Primera parte de la página, PRESENTACIÓN */}
        <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 lg:grid-cols-2 items-center max-h-min min-h-screen">
          <div className="p-10">
            <p className="text-4xl text-yellow-300 font-bold">
              Juan E. Pacha Alcalde
            </p>
            <br />
            <p className="text-lg text-black py-10">
              Puedes ver algunos de mis proyectos y avances en github, aunque se
              puedan ver errores, estoy en constante mejora y las críticas
              constructivas siempres son bien recibidas.
              <br />
              <br />
              Entra en mi gitHub y se libre para visitar lo que quieras.
            </p>
            <Link href="https://github.com/ivan-PA?tab=repositories">
              <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg pl-10">
                VER GITHUB
              </button>
            </Link>
          </div>
          <Image
            className="w-4 h-4 lg:w-20 lg:h-20 p-12"
            src={"/images/iconos/git-hub.png"}
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
