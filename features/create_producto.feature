# language: es
Característica: Crear producto

  Escenario: Crear un nuevo producto exitosamente
    Dado que el servicio está corriendo
    Cuando hago una solicitud POST a "/api/productos" con el siguiente cuerpo:
      """
      {
      "nombre": "Producto Nuevo",
      "precio": 123.40,
      "costo": 100.00,
      "inventario": 20
      }
      """
    Entonces debería recibir una respuesta con un código de estado 201
    Y la respuesta debería contener un producto con el nombre "Producto Nuevo" y precio 123.40
