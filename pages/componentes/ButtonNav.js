import Link from "next/link";
import { useId } from "react";

export default function ButtonNav(props) {
  const id = useId();

  return (
    <div
      key={id}
      className="nav py-2 pr-4 pl-3 mt-2 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-1"
    >
      <Link href="/">
        {props.children}
        <span className="bg-yellow-100 m-2 text-black text-lg">↓↓</span>
      </Link>

      {/*Se añaden tantos enlaces lista como parámetros vengan por props */}

      <ul key={props.id} className=" bg-yellow-100 rounded-b-lg">
        {props.contenido.map((item) => (
          <li
            key={id + item}
            className="text-gray-700  flex-col  px-4 text-left py-2 text-sm hover:bg-gray-200"
          >
            <Link href={`/empresas/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
