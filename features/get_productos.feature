# language: es
Característica: Obtener productos

  Escenario: Obtener todos los productos
    Dado que el servicio está corriendo
    Cuando hago una solicitud a "/api/productos"
    Entonces debería recibir una respuesta con un código de estado 200
    Y la respuesta debería contener una lista de productos
