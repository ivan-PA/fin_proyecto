import Image from "next/image";

export default function CardOpiniones(props) {
  return (
    <div className=" shrink-0 snap-center w-96 h-96 p-4 rounded-lg hover:-translate-y-3 ">
      <div className="bg-yellow-500 relative top-8 w-20 h-20 rounded-full z-10 m-auto">
        <Image
          className="object-contain rounded-full"
          src={props.rutaImg}
          width={80}
          height={80}
          alt="Imagen de Bombilla"
          layout="responsive"
        />
      </div>

      <div className=" block relative top-0 -right-7 w-8 h-8 rounded-full z-10 m-auto">
        <Image
          className="object-contain"
          src={props.rutaLogo}
          priority
          width={32}
          height={32}
          alt="Imagen de Logo"
          layout="responsive"
        />
      </div>
      <div className="bg-gray-400 flex flex-col relative bottom-8 right-4 w-96 h-64 overflow-y-auto rounded-lg shadow-lg shadow-black">
        <p className="p-1 mt-8 mx-4  w-70 h-10 text-center">{props.Name}</p>
        <p className=" mx-4  w-70 h-6 text-sm text-center ">
          Fecha {props.fecha}
        </p>
        <p className=" mt-1 mx-4 w-70 h-10 text-center">
          Valoración: {props.valoracion}
        </p>
        <p className="p-1 my-2  mx-4  w-70 h-20 overflow-y-auto">
          {props.children}
        </p>
      </div>
    </div>
  );
}
