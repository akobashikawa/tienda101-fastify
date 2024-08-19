# language: es
Característica: Crear venta

  Escenario: Crear una nuevo venta exitosamente
    Dado que el servicio está corriendo
    Y que existe un producto con id 1
    Y el producto con id 1 tiene una cantidad 10
    Cuando hago una solicitud POST a "/api/ventas" con el siguiente cuerpo:
      """
      {
      "producto_id": 1,
      "precio": 15,
      "cantidad": 1
      }
      """
    Entonces debería recibir una respuesta con un código de estado 201
    Y la respuesta debería contener una venta con el producto_id 1 y precio 15
    Y el producto con id 1 debería tener una cantidad 9
