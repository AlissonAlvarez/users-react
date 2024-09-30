
# Users React

Este es un proyecto en **React** que muestra una lista de usuarios utilizando datos de la API de [Random User](https://randomuser.me/). La aplicación incluye una barra de búsqueda para filtrar los usuarios por nombre, apellido, nombre completo o correo electrónico. Se ha implementado una estructura basada en **Atomic Design** para organizar los componentes, y se han aplicado optimizaciones de rendimiento usando `React.memo`, `useMemo` y `useCallback`.

## Estructura del Proyecto

El proyecto sigue el enfoque de **Atomic Design**, separando los componentes en diferentes niveles de abstracción:

```
src/
├── components/
│   ├── atoms/                  
│   │   ├── Button.jsx           # Componente de botón reutilizable
│   │   ├── Input.jsx            # Componente de campo de texto
│   │   └── Text.jsx             # Componente para mostrar texto
│   ├── molecules/              
│   │   ├── Search.jsx           # Barra de búsqueda que combina Input y Button
│   │   └── UserCard.jsx         # Tarjeta de usuario con foto, nombre y email
│   ├── organisms/              
│   │   └── UserList.jsx         # Lista de usuarios que utiliza UserCard
│   ├── templates/              
│   │   └── MainTemplate.jsx     # Plantilla principal que incluye la búsqueda y la lista de usuarios
│   └── pages/
│       └── UsersPage.jsx        # Página principal que gestiona los datos de usuarios
```

### Funcionalidades

1. **Búsqueda de Usuarios**: Filtra usuarios por nombre, apellido, nombre completo o correo electrónico.
2. **Optimización del Renderizado**:
   - Se utiliza `React.memo` para evitar renderizados innecesarios.
   - `useMemo` para memorizar la lista filtrada.
   - `useCallback` para optimizar las funciones que cambian el estado.
3. **Integración con la API de Random User**: Obtiene una lista de 15 usuarios aleatorios desde la API.
4. **Atomic Design**: Mejora la escalabilidad y mantenimiento del código.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo.  
Abre [http://localhost:5173](http://localhost:5173) para verlo en tu navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.

### `npm run lint`

Ejecuta **ESLint** para comprobar el código y asegurar la consistencia y calidad.

### `npm run preview`

Previsualiza la aplicación construida localmente.

## Instalación

Sigue los siguientes pasos para clonar y ejecutar este proyecto en tu entorno local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/AlissonAlvarez/users-react.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación en modo de desarrollo:

   ```bash
   npm run dev
   ```

## Dependencias Principales

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **React DOM**: Para manejar el DOM en React.
- **Styled Components**: Para el estilo de los componentes.
- **React Icons**: Para íconos en la interfaz.
- **Poppins Font**: Fuente utilizada en la aplicación.

## Dependencias de Desarrollo

- **Vite**: Herramienta de compilación rápida para proyectos de frontend.
- **ESLint**: Linter para garantizar la calidad del código.
- **@vitejs/plugin-react**: Soporte de React para Vite.
- **TypeScript Definitions**: Tipos para React y React DOM.

## Estructura de Componentes

El proyecto sigue el patrón de Atomic Design para una mejor organización y reusabilidad de los componentes.

- **Atoms**: Componentes simples y reutilizables como botones, campos de entrada y texto.
- **Molecules**: Combinación de átomos que funcionan como una unidad, como la barra de búsqueda y la tarjeta de usuario.
- **Organisms**: Combinación de moléculas para formar componentes más complejos como la lista de usuarios.
- **Templates**: Plantillas que agrupan organismos y establecen la disposición de la página.
- **Pages**: Componentes de nivel de página que contienen la lógica de negocio, como `UsersPage`.

## API Utilizada

Se utiliza la API de [Random User](https://randomuser.me/) para simular una lista de usuarios. La API devuelve un conjunto de datos que incluye nombre, apellido, correo electrónico y foto de perfil.

---

¡Gracias por revisar este proyecto!
