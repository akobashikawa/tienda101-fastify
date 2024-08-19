# language: es
Característica: Crear venta

  Escenario: Crear una nuevo venta exitosamente
    Dado que el servicio está corriendo
    Y que existe un producto con id 1
    Cuando hago una solicitud POST a "/api/ventas" con el siguiente cuerpo:
      """
      {
      "producto_id": 1,
      "precio": 123.40,
      "cantidad": 10
      }
      """
    Entonces debería recibir una respuesta con un código de estado 201
    Y la respuesta debería contener una venta con el producto_id 1 y precio 123.40
