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
# get all
curl http://localhost:3000/api/productos

# create
curl -X POST http://localhost:3000/api/productos -H "Content-Type: application/json" -d '{"nombre": "Producto Nuevo", "precio": 123.4, "costo": 100.00, "cantidad": 20}'

# get
curl http://localhost:3000/api/productos/1

# update
curl -X PUT http://localhost:3000/api/productos/1 -H "Content-Type: application/json" -d '{"nombre": "Producto Actualizado", "precio": 200.00, "costo": 100.00, "cantidad": 30}'

# delete
curl -X DELETE http://localhost:3000/api/productos/1 
```