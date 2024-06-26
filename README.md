# TaskFlow

El reto consiste en crear una aplicación sencilla en react js, que tenga las siguientes
funcionalidades:
- Una sección de “tasks”, que es un listado sencillo de tasks agregados por el usuario (solo
tendrán descripción), y que dé la opción de agregar más tasks.
- Una sección de “listado”, que simplemente hará un request a una lista de datos remoto y les
hará render en la pantalla


La aplicación fue desarrollada utilizando Next.js, Redux Toolkit y Material-UI. En la sección de tareas, los usuarios pueden crear nuevas tareas, eliminarlas y marcarlas como completadas. Los datos se mantienen persistentes utilizando el almacenamiento local (localStorage)

## Deploy

La aplicación está desplegada y accesible en el siguiente enlace:

[TaskFlow - Technical test](https://task-flow-silk.vercel.app/)

Puedes acceder al deploy haciendo clic en el enlace anterior.


## Instalación

Para empezar, asegúrate de tener `pnpm` instalado globalmente en tu sistema. Puedes instalarlo con npm si aún no lo tienes:

```bash
npm install -g pnpm
```

Luego, clona este repositorio y ejecuta:

```bash
pnpm install
```

Esto instalará todas las dependencias necesarias para el proyecto.

## Desarrollo

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```bash
pnpm dev
```

Esto iniciará el servidor de desarrollo de Next.js y podrás acceder a tu aplicación en `http://localhost:3000`.

## Pruebas

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

```bash
pnpm test
```

Esto ejecutará todas las pruebas definidas en el proyecto utilizando Jest.