# language: es
Característica: Actualizar venta

  Escenario: Actualizar un venta existente
    Dado que el servicio está corriendo
    Y que existe una venta con id 1
    Cuando hago una solicitud PUT a "/api/ventas/1" con el siguiente payload:
      """
      {
      "producto_id": 1,
      "precio": 200.00,
      "cantidad": 15
      }
      """
    Entonces debería recibir una respuesta con un código de estado 200
    Y la respuesta debería contener la venta con id 1 actualizada con cantidad 15

  Escenario: Actualizar un venta inexistente
    Dado que el servicio está corriendo
    Y que no existe una venta con id 9999
    Cuando hago una solicitud PUT a "/api/ventas/1" con el siguiente payload:
      """
      {
      "producto_id": 1,
      "precio": 200.00,
      "cantidad": 15
      }
      """
    Entonces debería recibir una respuesta con un código de estado 404
    Y la respuesta debería contener el mensaje de error "Venta no encontrada"
