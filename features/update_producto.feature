# language: es
Característica: Actualizar producto

  Escenario: Actualizar un producto
    Dado que el servicio está corriendo
    Y que existe un producto con id 1
    Cuando hago una solicitud PUT a "/api/productos/1" con el siguiente payload:
      """
      {
      "nombre": "Producto Actualizado",
      "precio": 200.00,
      "costo": 150.00,
      "inventario": 30
      }
      """
    Entonces debería recibir una respuesta con un código de estado 200
    Y la respuesta debería contener el producto con id 1 actualizado con nombre "Producto Actualizado"