const url = "http://localhost:3000/productos/";

export const getAll = async () => {
  try {
    const promesa = await fetch(url);
    const respuesta = await promesa.json();
    // console.log("rptaAll:", respuesta);
    return respuesta;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getById = async (id) => {
  try {
    const promesa = await fetch(`${url}?id=${id}`);
    const respuesta = await promesa.json();
    // console.log("rptaid:", respuesta);
    if (!respuesta.length == 0) {
      return respuesta[0];
    } else {
      throw("Producto no encontrado");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};
// getById(0);
// getById(1);

// getAll()
