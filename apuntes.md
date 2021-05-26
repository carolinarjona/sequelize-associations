- Instalamos todo
- Script nodemon start:dev
- Creamos .env
- Cargamos .env en app.js
- Creamos carpeta config para crear la bbdd sequelize, que es la herramienta para conectarnos a la bbdd con las variables de entorno.
- Para crear las tablas, creamos la carpeta Models con las entidades dentro.
- Para ello, importamos DataTypes para indicar el tipo de dato que tendrán las columnas y la base de datos que hemos creado.
- DefaultScope y Scopes damos configuraciones extras para decirles que no nos devuelva la contraseña si no no queremos o si queremos que nos las devuelva para validarlas y permitirle al usuario hacer login.
- Base de datos: repositorio
- Lógica de negocio: servicio
- Controlador: request, response (route)
- Creamos repositories > userReposity.js para crear la lógica de la base de datos, por ejemplo, buscar usuarios, insertar usuarios, etc.
    - FindAllUsers
    - FindUserByEmail
    - FindUserWithPasswordByEmail --> Lo usamos indicando el scope que hemos indicado en db.js para luego validar que el usuario haya metido bien la contraseña.
    - InsertUser
    - DeleteUser
    - UpdateUser
- En userService.js tendremos nuestra lógica de negocio. Por ejemplo, validaciones, que se envíe un email para confirmar el usuario, etc. Aquí se hace lo que el cliente define.
    - Los errores del userService.js es para indicar si el usuario no ha indicado algunos de los campos.
- asyncScrypt: Contraseña, nuestra clave para que la contraseña se encripte (SALT) y la longitud de la contraseña encriptada y decimos que nos devuelva un string hexadecimal con esa longitud. 
    - El proceso de encriptado se hace cuando el usuario se registra (en userService.js).
- Con el error de login vemos si el usuario ha metido todos los campos y si existe ese usuario.
    - Borramos la password para que no se vea.
- Ya tendríamos la parte de servicio + parte de repositorio.
- El servicio usa los métodos del repositorio para funcionar.

- Instalamos
Variables
Configuraicon bbdd
Definimos modelos
Archivo repositorio para hablar con bbdd
Crear servicio, logica de negocio, capa intermedia entre bbdd y ruta
Creamos rutas que llama al servicio