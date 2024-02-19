export default function getLocalidades() {
    
  
    return fetch(`${process.env.REACT_APP_API}/ciudades`, {
        method: "GET",
        headers: {
          Authorization: "asdssffsdff",
        },
    })
      .then((res) => res.json())
      .then((response) => {
        //se pone valor por defecto por si viene undefined
        const { data = [] } = response
        if (Array.isArray(data)) {
  
          const localidades = () => data.registros.map((localidad) => {
            const {id, nombre} = localidad;
            return { id, nombre };
          })
          //console.log(gifs);
          //console.log(localidades)
          return localidades;
        }
      });
  }