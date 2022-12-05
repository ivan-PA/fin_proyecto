import Image from "next/legacy/image";
import { useId } from "react";

export default function CardEmpresas(props) {
  const id = useId();
  return (
    <>
      if(props!==null)
      {props.ruta.map((item) => (
        <div
          key={id + item}
          id={id}
          className="hover:animate-wiggle flex-shrink-0 snap-center w-96 h-32 p-4 rounded-lg "
        >
          <Image
            className="object-contain"
            src={"/images/empresas/" + item + ".png"}
            priority
            width={96}
            height={20}
            alt={"Imagen de " + item}
            layout="responsive"
          />
          <p> {props.children}</p>
        </div>
      ))}
    </>
  );
}
