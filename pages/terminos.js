import Headernav from "./componentes/headernav";
import Footer from "./footer";

export default function Terminos() {
  return (
    <>
      <div>
        {/*Cabecera común en todas las páginas */}
        <Headernav />
        {/*Primera parte de la página, PRESENTACIÓN */}
        <div className="bg-gradient-to-b from-blue-500  to-white items-center max-h-min min-h-screen">
          <div className="p-10">
            <p className="text-5xl text-black font-bold">1. Introducción</p>
            <br />
            <p className="text-lg text-black py-10">
              Estos Términos y condiciones se aplican a este sitio web y a las
              transacciones relacionadas con nuestros productos y servicios.
              Usted puede estar obligado por contratos adicionales relacionados
              con su relación con nosotros o con cualquier producto o servicio
              que reciba de nosotros. Si alguna de las disposiciones de los
              contratos adicionales entra en conflicto con alguna de las
              disposiciones de estas Condiciones, las disposiciones de estos
              contratos adicionales prevalecerán.
            </p>
            <p className="text-5xl text-black font-bold">2.Vinculación</p>
            <p className="text-lg text-black py-10">
              Al registrarse en este sitio web, acceder a él o utilizarlo de
              cualquier otro modo, usted acepta someterse a las condiciones que
              se exponen a continuación. El mero uso de este sitio web implica
              el conocimiento y la aceptación de estos Términos y condiciones.
              En algunos casos particulares, también podemos pedirle que lo
              acepte explícitamente.
            </p>
            <p className="text-5xl text-black font-bold">3.......</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
