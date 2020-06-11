import React from "react"

export default () => (
  <div className="w-full flex justify-center p-5">
    <form className="flex flex-wrap p-5 max-w-6xl border-4 border-gray-200 rounded-lg shadow-lg">
      <div className="flex-1 pr-2">
        <label htmlFor="Nombre" className="block mb-2">
          Nombre
        </label>
        <input
          className="w-full appearance-none outline-none bg-gray-300 rounded-lg p-3"
          type="text"
          name=""
          id="Nombre"
          placeholder="Jhon"
        />
      </div>
      <div className="flex-1 pl-2">
        <label htmlFor="Apellido" className="block mb-2">
          Apellido
        </label>
        <input
          className="w-full appearance-none outline-none bg-gray-300 rounded-lg p-3"
          type="text"
          name=""
          id="Nombre"
          placeholder="Conor"
        />
      </div>
      <div className="w-full pt-4">
        <label className="block mb-2" htmlFor="MasTexto">
          Cuéntame...
        </label>
        <textarea
          className="w-full outline-none rounded-lg p-3 bg-gray-300"
          name=""
          id="MasTexto"
          cols={10}
          rows={5}
          placeholder="Describe tu idea..."
        ></textarea>
      </div>
      <button
        className="mx-auto focus:outline-none mt-2 bg-teal-600 rounded-full p-4 text-white font-bold"
        type="submit"
      >
        Contactame!
      </button>
    </form>
  </div>
)
