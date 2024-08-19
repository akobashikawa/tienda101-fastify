# Tienda101 - Fastify

## Hexagonal

- Un router invoca a controllers
- Un controller invoca services
- Un service invoca repositories y otros services
- Un repository usa models

- Los routers y controllers son parte de la interface web de usuario
- Puede haber equivalentes para interface de consola y otros
- Los repositories son parte de la interface de datos
- Los services contienen la business logic
- Los services idealmente son agnósticos a la interface de usuario y a la interface de datos

## curl

```sh
# get all productos
curl http://localhost:3000/api/productos

# create producto
curl -X POST http://localhost:3000/api/productos -H "Content-Type: application/json" -d '{"nombre": "Producto Nuevo", "precio": 15, "costo": 10, "cantidad": 10}'

# get producto
curl http://localhost:3000/api/productos/1

# update producto
curl -X PUT http://localhost:3000/api/productos/1 -H "Content-Type: application/json" -d '{"nombre": "Producto Actualizado", "precio": 20, "costo": 10, "cantidad": 5}'

curl -X PUT http://localhost:3000/api/productos/1 -H "Content-Type: application/json" -d '{"cantidad": 6}'

# delete producto
curl -X DELETE http://localhost:3000/api/productos/1

# get all ventas
curl http://localhost:3000/api/ventas

# create venta
curl -X POST http://localhost:3000/api/venta -H "Content-Type: application/json" -d '{"producto_id": 1, "precio": 15, "cantidad": 1}'
```

## bash

```sh
for file in producto*; do mv $file $(echo $file | sed 's/productos-/ventas-/'); done
```