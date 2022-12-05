import Image from "next/image";

export default function CardOferta(props) {
  return (
    <>
      <div className=" text-center w-72 h-96 py-8">
        <div className="mx-24 w=8 h=20 shadow-xl shadow-violet-500 rounded-3xl">
          <Image
            className="object-contain shadow-2xl shadow-black rounded-3xl w-10 h-10"
            src={"/images/iconos/" + props.icono + ".png"}
            priority
            width={4}
            height={4}
            alt={"Imagen de "}
            layout="responsive"
          />
        </div>

        <h1 className="text-black font-bold text-xl m-8">{props.titulo}</h1>
        <p className="text-black m-4">{props.children}</p>
        {/* <a className="text-black text-xl font-bold" href={props.ruta}>
          Leer más<span className="text-3xl font-bold">→</span>
        </a> */}
      </div>
    </>
  );
}