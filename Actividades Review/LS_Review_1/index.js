
document.getElementById("formulario").addEventListener("submit", (event) => {
  const usuario = {};
  usuario.nombre = document.getElementById('input_nombre').value;

  usuario.edad = document.getElementById('input_edad').value;

  usuario.correo = document.getElementById('input_correo').value;

  localStorage.setItem("nombre", usuario.nombre)
  localStorage.setItem("edad", usuario.edad);
  localStorage.setItem("correo", usuario.correo);
  console.log(usuario);
  
});


