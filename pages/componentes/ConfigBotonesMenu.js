import { useId } from "react";
import Link from "next/link";
import ButtonNav from "./ButtonNav";
import React from "react";

export default function ConfigBotonesMenu() {
  const id = useId();
  return (
    <div>
      <ul className="headerNav group bg-white opacity-95 flex flex-col p-4 mt-4  xl:flex-row xl:space-x-8 xl:mt-0 xl:text-md xl:font-medium xl:border-0 z-30">
        <li>
          <ButtonNav
            id={id + 1}
            contenido={["Empresa1", "Empresa2", "Empresa3", "Empresa4"]}
          >
            Recomendaciones
          </ButtonNav>
        </li>

        <li>
          <Link
            href="/Sobremi"
            className="block py-2 pr-4 pl-3 mt-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-1"
          >
            Sobre mi
          </Link>
        </li>

        <li>
          <Link
            href="/Estudios"
            className="block py-2 pr-4 pl-3 mt-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-1"
          >
            Estudios
          </Link>
        </li>

        <li>
          <Link
            href="/GitHub"
            className="block py-2 pr-4 pl-3 mt-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-1"
          >
            GitHub
          </Link>
        </li>

        <li>
          <Link
            href="/Contacto"
            className="block py-2 pr-4 pl-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-1"
          >
            <button className="bg-yellow-400 rounded-lg border-black border-2 p-3 text-gray-700">
              Contáctame
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
