import Headernav from "./componentes/Headernav";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";

export default function Estudios() {
  return (
    <>
      <div>
        {/*Cabecera común en todas las páginas */}
        <Headernav />
        {/*Primera parte de la página, PRESENTACIÓN */}
        <div className="bg-gradient-to-b from-blue-500  to-white grid grid-row-2 ">
          <p className="text-6xl text-yellow-300 font-bold text-center p-4">
            Técnico superior en DAM.
          </p>
          <div className=" grid grid-row-2 lg:grid-cols-2 items-center max-h-min min-h-screen">
            <div className="pl-10 pb-10">
              <br />
              <p className="text-lg text-black py-10">
                He tenido trabajos en varios sectores, gracias a mi capacidad de
                adaptación puedo decir que domino un poco de todo, puede
                resultar interesante a la hora de poner una idea en
                funcionamiento. Detallo algunos de los conocimientos en la rama
                de informática:
                <br />
                <br />
                <ul className="pl-4">
                  <li>
                    <div className="flex flex-nowrap">
                      <div className="w-8 h-8 border-white border-2 rounded-md mr-4 bg-white">
                        <Image
                          className="object-contain rounded-md"
                          src={"/images/iconos/Java.png"}
                          priority
                          width={4}
                          height={4}
                          alt={"Logo de Java "}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <p className="">
                        <b>Java.</b> Estudiado en el curso, con una califiación
                        media de 9.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div className="flex flex-nowrap">
                      <div className="w-8 h-8 border-white border-2 rounded-md mr-4 bg-white">
                        <Image
                          className="object-contain rounded-md"
                          src={"/images/iconos/android.png"}
                          priority
                          width={4}
                          height={4}
                          alt={"Logo de Android"}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <p className="">
                        <b>Android.</b> Estudiado en el curso, con una
                        calificación media de 8.
                      </p>
                    </div>
                  </li>

                  <br />
                  <li>
                    <div className="flex flex-nowrap">
                      <div className="w-8 h-8 border-white border-2 rounded-md mr-4 bg-white">
                        <Image
                          className="object-contain rounded-md"
                          src={"/images/iconos/unity.png"}
                          priority
                          width={4}
                          height={4}
                          alt={"Logo de Unity"}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <p className="">
                        <b>Unity.</b> Estudiado en el curso con una califiación
                        media de 8.
                      </p>
                    </div>
                  </li>

                  <br />
                  <li>
                    <div className="flex flex-nowrap">
                      <div className="w-8 h-8 border-white border-2 rounded-md mr-4 bg-white">
                        <Image
                          className="object-contain rounded-md"
                          src={"/images/iconos/js.png"}
                          priority
                          width={4}
                          height={4}
                          alt={"Logo de JavaScript"}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <p className="">
                        <b>JavaScript.</b> Estudiado y trabajado en empresa en
                        prácticas y posteriormente.
                      </p>
                    </div>
                  </li>

                  <br />
                  <li>
                    <div className="flex flex-nowrap">
                      <div className="w-8 h-8 border-white border-2 rounded-md mr-4 bg-white">
                        <Image
                          className="object-contain rounded-md"
                          src={"/images/iconos/react.png"}
                          priority
                          width={4}
                          height={4}
                          alt={"Logo de React"}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <p className="">
                        <b>React.</b> Estudiado y trabajado en empresa en
                        prácticas y posteriormente.
                      </p>
                    </div>
                  </li>

                  <br />
                  <li>
                    <div className="flex flex-nowrap">
                      <div className="w-8 h-8 border-white border-2 rounded-md mr-4 bg-white">
                        <Image
                          className="object-contain rounded-md"
                          src={"/images/iconos/next.png"}
                          priority
                          width={4}
                          height={4}
                          alt={"Logo de Next js"}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <p className="">
                        <b>Next js.</b> Estudiado y trabajado en empresa en
                        prácticas y posteriormente.
                      </p>
                    </div>
                  </li>

                  <br />
                  <li>
                    <div className="flex flex-nowrap">
                      <div className="w-8 h-8 border-white border-2 rounded-md mr-4">
                        <Image
                          className="object-contain rounded-md"
                          src={"/images/iconos/tailwind.png"}
                          priority
                          width={4}
                          height={4}
                          alt={"Logo de Tailwind "}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <p className="">
                        <b>Tailwind css.</b> Estudiado y trabajado en empresa en
                        prácticas y posteriormente.
                      </p>
                    </div>
                  </li>

                  <br />
                  <li>
                    <div className="flex flex-nowrap">
                      <div className="w-8 h-8 border-white border-2 rounded-md mr-4">
                        <Image
                          className="object-contain rounded-md"
                          src={"/images/iconos/html_css.png"}
                          priority
                          width={4}
                          height={4}
                          alt={"Logo de Tailwind "}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <p className="">
                        <b>THtml y css.</b> Estudiado y trabajado en empresa en
                        prácticas y posteriormente.
                      </p>
                    </div>
                  </li>

                  <br />
                  <li>
                    <div className="flex flex-nowrap">
                      <div className="w-8 h-8 border-white border-2 rounded-md mr-4 bg-white">
                        <Image
                          className="object-contain rounded-md"
                          src={"/images/iconos/git-hub.png"}
                          priority
                          width={4}
                          height={4}
                          alt={"Logo de GitHub"}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                      <p className="">
                        <b>GitHub.</b> Estudiado y trabajado en empresa en
                        prácticas y posteriormente.
                      </p>
                    </div>
                  </li>
                </ul>
              </p>

              <Link
                href="/Contacto"
                className="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-1"
              >
                <button className="bg-black rounded-lg shadow-2xl shadow-yellow-200 w-96 h-16 p-4 text-lg pl-10">
                  CONTACTO
                </button>
              </Link>
            </div>
            <Image
              className="w-4 h-4 lg:w-20 lg:h-20 p-12 my-auto"
              src={"/images/estudios.jpg"}
              priority
              width={300}
              height={300}
              alt="Imagen de Bombilla"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
