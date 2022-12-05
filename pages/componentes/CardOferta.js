import Image from "next/image";

export default function CardOferta(props) {
  return (
    <>
      <div className=" text-center w-72 h-96 py-8">
        <div className="mx-24 w=8 h=20 shadow-xl shadow-violet-500 rounded-3xl">
          <Image
            className="object-contain shadow-2xl shadow-black rounded-3xl w-10 h-10"
            src={"/images/iconos/" + props.icono + ".png"}
            width={4}
            height={4}
            alt={"Imagen de "}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        <h1 className="text-black font-bold text-xl m-8">{props.titulo}</h1>
        <p className="text-black m-4">{props.children}</p>
      </div>
    </>
  );
}
