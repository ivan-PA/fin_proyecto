import Image from "next/image";
import { useState, useId, useEffect } from "react";
import Link from "next/link";
import ConfigBotonesMenu from "./ConfigBotonesMenu";

export default function Headernav() {
  const [mostrar, setMostrar] = useState(false);
  const [user, setUser] = useState(true);
  const id = useId();

  useEffect(() => {
    let pantalla = window.matchMedia("(min-width:1280px)");
    setUser(pantalla.matches);
  }, []);

  //Función para ocultar menú o abrir en formato ordenador
  function WindowReSize() {
    let pantalla = window.matchMedia("(min-width:1280px)");
    setUser(pantalla.matches);
    user ? setMostrar(false) : "";
  }

  //Al no estar definido en el cliente window hay que asociarlo a indefinido
  if (typeof window !== "undefined") {
    window.onresize = WindowReSize;
  }

  function abrirMenu() {
    setMostrar(!mostrar);
  }

  return (
    <div className=" w-full">
      <nav className="bg-white border-gray-200 h-28 px-2 sm:px-4 py-2.5">
        <div className=" container flex flex-wrap justify-between mx-auto">
          {/*Mostramos la imagen de la empresa */}
          <Link href="/">
            <div className="animate-entry block relative top-6 left-8 w-52 h-10 2xl:w-96 2xl:h-20">
              <Image
                className="w-52 h-10"
                src={"/images/Jepa.jpg"}
                width={200}
                height={40}
                // style="responsive"
                alt="logo JP"
                href="/"
              />
            </div>
          </Link>

          {user && <ConfigBotonesMenu className="hidden z-30" key={id} />}

          {/*Botón para pantallas pequeñas */}
          <div className="flex flex-col">
            <button
              onClick={() => abrirMenu()}
              id="botonNav"
              data-collapse-toggle="navbar-default"
              type="button"
              className="fixed top-8 right-8 ml-3 flex-row xl:flex-col items-center p-2  text-lg text-gray-500 rounded-lg xl:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-20"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="w-6 h-6 ml-auto"
                aria-hidden="true"
                fillRule="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>

              {/*Menú que se muestra sólo si la variable mostrar está en true*/}
              {mostrar && <ConfigBotonesMenu className="z-30" key={id} />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
