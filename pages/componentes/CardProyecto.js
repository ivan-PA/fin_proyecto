import Link from "next/link";
import Image from "next/image";

export default function CardProyecto(props) {
  return (
    <div className="hover:ease-in-out duration-200 hover:w-96 hover:h-96 bg-gradient-to-r from-yellow-300 to-orange-300 flex-shrink-0 snap-center w-80 h-80 rounded-lg">
      <Link href={props.ruta}>
        <div className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-1">
          <Image
            className=" object-cover rounded"
            src={"/images/" + props.ruta + ".jpg"}
            width={384}
            height={384}
            alt={"Imagen de " + props.ruta}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </Link>
    </div>
  );
}
