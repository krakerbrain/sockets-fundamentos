let socket = io();

//Escuchar
socket.on("connect", function () {
  console.log("Conectado al servidor");
});
//Escuchar
socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

// Enviar informacion
socket.emit(
  "enviarMensaje",
  {
    usuario: "Fernando",
    mensaje: "Hola Mundo",
  },
  function (resp) {
    console.log("respuesta server", resp);
  }
);

//Escuchar informacion

socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor: ", mensaje);
});
