#GESTOR APP 2025
## Plataforma para la gestion  de sitios Comunes
JUAN DIEGO SANCHEZ - WD
Melissa Beltran

Entregables
1. Modificar el readme.md para incluir recomendaciones de instalacion uso y proposito de la app
2. agregar el componente footer a los commons
3. Refactorizar el diseño del Home (Menu, banner, acerca)
4. crear pagina nueva llamada booking(incluir en rutas)
5. subir el desarrollo a git hub con una rama independiente haciendo pull request React

Gestor de Espacios para Unidad Residencial

Descripción

Esta aplicación permite la gestión de espacios comunes dentro de una unidad residencial, como piscina, jacuzzi, salón social, entre otros. La aplicación está desarrollada en React y proporciona una interfaz intuitiva para la administración de reservas y disponibilidad de los espacios.

🚀 Instalación y Configuración

1. Fork del Proyecto

Antes de comenzar, asegúrate de hacer un fork del repositorio original para estructurarlo en React.

Ve al repositorio original en GitHub.

Haz clic en el botón Fork en la esquina superior derecha.

Clona tu repositorio forkeado en tu máquina local:

git clone https://github.com/tu-usuario/nombre-del-repositorio.git

Ingresa al directorio del proyecto:

cd nombre-del-repositorio

2. Instalación de Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

npm install

Asegúrate de que tienes instalado Node.js (versión 16 o superior) y npm.
Puedes verificar tu versión con:

node -v
npm -v

3. Configuración del Entorno

Crea un archivo .env en la raíz del proyecto y agrega las variables necesarias, por ejemplo:

REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development

Asegúrate de que el backend esté en funcionamiento si la aplicación consume una API.

4. Ejecución del Proyecto

Para ejecutar la aplicación en modo de desarrollo, usa el siguiente comando:

npm start

Esto abrirá la aplicación en tu navegador en http://localhost:5173.


📌 Recomendaciones de Instalación

Usar Node.js LTS: Para evitar errores de compatibilidad, usa la versión LTS de Node.js.

Instalar dependencias con npm o yarn: Mantén un solo gestor de paquetes para evitar conflictos.

Configurar un .env correctamente: No expongas credenciales sensibles en el código.

Revisar los logs de error: Si encuentras problemas, revisa los logs en la consola del navegador o en la terminal.

Mantener el código limpio y modular: Usa componentes reutilizables y organiza bien las carpetas.

Usar versiones específicas de las dependencias: Evita actualizaciones inesperadas que puedan romper el código.

📌 Contribuciones

Si deseas contribuir al proyecto:

Haz un fork y crea una nueva rama:

git checkout -b feature/nueva-funcionalidad

Realiza tus cambios y sube la rama:

git push origin feature/nueva-funcionalidad

Crea un Pull Request en GitHub.

