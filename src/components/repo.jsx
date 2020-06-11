import React from "react"

export default () => (
  <div className="flex flex-wrap p-4 mr-4 mb-4 shadow-2xl max-w-lg p-5 border-4 border-white rounded-lg">
    <div className="name w-full text-xl font-semibold">Titulo del repo</div>
    <div className="description w-full my-3 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sequi.</div>
    <div className="date-creation flex-1 text-center">10 de abril del 2020</div>
    <div className="language flex-1 text-center">Python</div>
    <hr className="w-full my-3"/>
    <button type="button" className="w-full focus:outline-none hover:font-semibold appearance-none">Ir al repositorio</button>
  </div>
)
