# language: es
Característica: Obtener productos

  Escenario: Obtener todos los productos
    Dado que el servicio está corriendo
    Cuando hago una solicitud a "/api/productos"
    Entonces debería recibir una respuesta con un código de estado 200
    Y la respuesta debería contener una lista de productos

  Escenario: Obtener un producto por id
    Dado que el servicio está corriendo
    Y que existe un producto con id 1
    Cuando hago una solicitud a "/api/productos/1"
    Entonces debería recibir una respuesta con un código de estado 200
    Y la respuesta debería contener un producto con el id 1