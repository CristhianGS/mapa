import React, { Component } from 'react'

export default class inicio extends Component {
    render() {
        return (
            <>

          
            {/*Carrusel*/}
           
            <div className="carousel relative flex fixed shadow-2xl bg-white">
                <div className="carousel-inner relative overflow-hidden w-full">
                
                    <input className="carousel-open" type="radio" id="carousel-1" name="carousel"  hidden="true"
                        checked="checked"></input>
                    <div id="carrusel" className="carousel-item absolute opacity-0">
                        <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Tu apoyo da
                            acceso a clases virtuales</div>
                    </div>
                    <label for="carousel-3"
                        className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label for="carousel-2"
                        className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
    
                    
                    <input className="carousel-open" type="radio" id="carousel-2" name="carousel"  hidden="true" checked="checked"></input>
                    <div id="carrusel" className="carousel-item absolute opacity-0">
                        <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">Contribuye al
                            aprendizaje de estudiantes de institutos superiores </div>
                    </div>
                    <label for="carousel-1"
                        className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label for="carousel-3"
                        className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
    
    
                    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" hidden="true" checked="checked" ></input>
                    <div id="carrusel" className="carousel-item absolute opacity-0">
                        <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">Muchos estudiantes
                            fueron afectados tras la pandemia por el covid 19 y tambien sus familias</div>
                    </div>
                    <label for="carousel-2"
                        className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label for="carousel-1"
                        className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
    
            
                    <ol className="carousel-indicators">
                        <li className="inline-block mr-3">
                            <label for="carousel-1"
                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li className="inline-block mr-3">
                            <label for="carousel-2"
                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li className="inline-block mr-3">
                            <label for="carousel-3"
                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                    </ol>
    
                </div>
            </div>
    
    
            {/*Cuerpo*/}
            <div className="container relative flex fixed w-full items-center text-center ">
    
              <div className=" mx-auto my-auto px-6 py-16 text-align text-center">
                <div className="md:flex items-center ">
                  <div className="w-full">
                    <div className="max-w-lg ">
                      <h1 className="text-gray-800 dark:text-white text-2xl font-semibold uppercase md:text-3xl ">
                        ¿Qué es Nur Tech?</h1>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">A causa del COVID 19, con el objetivo
                      de precautelar la salud de estudiantes y docentes, las autoridades determinaron el
                      cambio de modalidad educativa de presencial a virtual. En consecuencia, muchas
                      familias se enfrentaron a esta nueva situación no siempre contando con computadores
                      en sus hogares.
    
                      NUR TECH es un proyecto que tiene como objetivo entregar computadores refaccionados
                      a estudiantes de Institutos Tecnológicos Superiores de Quito y sus familias que al
                      momento no disponen de equipos propios.
    
                      El proyecto es gestionado por un grupo de voluntarios que son docentes del IST
                      Benito Juárez y activistas locales.
    
                      Nuestro proceso tiene tres pasos: recolectar,acondicionar y entregar. En el primer
                      paso nos ponemos en contacto con las personas que desean donar equipos, y se define
                      una cita para recolectar el equipo a domicilio; como segundo paso todos los equipos
                      son acondicionados: se borran sus discos duros, se revisan los componentes, se
                      cambian partes y piezas si hace falta. Finalmente se hace la entrega del computador
                        refaccionado en el domicilio del estudiante.</p>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
    
            <div className="mx-auto px-6 py-16 lg m-auto text-center">
              <div className="md sm lg m-auto items-center ">
                <div className="max-w-xl-lg ">
    
    
                  <h2 className="text-gray-800 dark:text-white text-2xl font-semibold uppercase md:text-3xl">¿Cómo
                  puedo
                  ayudar?
            </h2>
    
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Buscamos computadores
                  usados, partes y repuestos para entregarlos a estudiantes del IST YAVIRAC que no
                disponen al momento de equipos propios</p>
                </div>
    
                <div className="  h-cover md:w cover md:h-cover  relative flex fixed">
                  <div className="gatsby-image-wrapper" id="divImg2">
                    <div></div>
                    <img id="img" aria-hidden="true" src="../ekko true damage.jpg" alt="Avatar" />
                  </div>
                </div>
    
              </div>
    
    
    
              <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                href="index (copy).html">
                <span>Donar</span>
              </a>
            </div>
    
          {/*Footer*/}
    
    
          <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10 center">
            <div className="md sm lg m-auto text-gray-800 flex flex-wrap justify-left  ">
                
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Participa con nosotros
                    </div>
    
            
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Dirección: Ambato y Garcia Moreno, Campus IST YAVIRAC
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Teléfono : (593) 999 705 620
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Email : probayo@yavirac.edu.ec
                    </a>
    
                </div>
    
          
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        LINKS DE INTERÉS
                    </div>
    
                
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        IST YAVIRAC
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Conoce al equipo
                    </a>
    
                </div>
    
        
    
            </div>
    
         
            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 
                border-t border-gray-500 text-gray-400 text-sm 
                flex-col md:flex-row max-w-6xl">
                    <div className="mt-2">
                        © 2021 PROYECTO NUR TECH.
                    </div>
    
                    
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-youtube"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    
          </>
        )
    }
}
