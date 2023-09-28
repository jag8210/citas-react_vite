



const Paciente = ( {paciente, setPaciente, eliminarPaciente} ) => {


    const { nombre, propietario, email, fechaAlta, sintomas, id } = paciente
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')

        if( respuesta) {
            eliminarPaciente(id);
        }
    }
    
  return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
              <p className="font-bold mb3 text-gray-700 uppercase">
                    Nombre:{" "}
                    <span className="font-normal normal-case">{nombre}</span>
              </p>
              <p className="font-bold mb3 text-gray-700 uppercase">
                    Propietaro:{" "}
                    <span className="font-normal normal-case">
                          {propietario}
                    </span>
              </p>
              <p className="font-bold mb3 text-gray-700 uppercase">
                    Email:{" "}
                    <span className="font-normal normal-case">{email}</span>
              </p>
              <p className="font-bold mb3 text-gray-700 uppercase">
                    Fecha de Alta:{" "}
                    <span className="font-normal normal-case">{fechaAlta}</span>
              </p>
              <p className="font-bold mb3 text-gray-700 uppercase">
                    Sintomas:{" "}
                    <span className="font-normal normal-case">{sintomas}</span>
              </p>

              <div className="flex justify-between mt-10">
                    <button
                          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                          type="button"
                          onClick={()=> setPaciente(paciente)}
                    >
                          Editar
                    </button>

                    <button
                          className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                           type="button"
                           onClick={ handleEliminar }
                    >
                          Eliminar
                    </button>
              </div>
        </div>
  );
}

export default Paciente