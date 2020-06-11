import React from "react"

import Illustration1 from "../images/undraw_pitching_36ol.svg" // TODO Fix this warning 

export default () => (
  <header className="bg-teal-600 text-white flex justify-center items-center p-10">
    <div className="container max-w-xl p-10 flex-1">
      <h1 className="text-xl sm:text-3xl md:text-5xl font-bold">Alois Carrera</h1>
      <p className="font-light text-xl">Presionar teclas para dar lógica es mi pasión</p>
    </div>
    <img src={Illustration1} alt="Ilustración #1" className="max-w-lg hidden sm:block object-scale-down" />
  </header>
)
