import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-300 h-16 flex flex-row text-black text-sm items-center ">
      <div className="pl-10 w-2/5 float-left">
        <h6> Todos los derechos reservados.</h6>
      </div>

      <div className="w-3/5 float-right">
        <div className="pr-8 grid grid-flow-col gap-4 float-right">
          <Link href="/Sobremi">
            <div>Sobre mi</div>
          </Link>
          <Link href="/Contacto">
            <div>Contacto</div>
          </Link>
          <Link href="/terminos">
            <div>Términos y condiciones</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
