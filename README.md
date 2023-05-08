# ClienteApp

Esta es un Crud con angular y spring boot. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## ORM: 
La ORM (Object-Relational Mapping) en Spring Boot con Java es el proceso que se encarga de mapear objetos de una aplicación Java a una base de datos relacional. Esto se realiza mediante el uso de una herramienta ORM, como Hibernate, que permite interactuar con la base de datos de una manera más orientada a objetos.

El proceso de la ORM en Spring Boot con Java generalmente sigue los siguientes pasos:
Configuración de la conexión a la base de datos: Se debe definir la información necesaria para establecer la conexión con la base de datos. Esta configuración se puede realizar en el archivo application.properties o application.yml según se prefiera.

Definición de las clases de entidades: Las clases de entidades son aquellas que representan las tablas de la base de datos. Estas clases se pueden definir utilizando anotaciones de JPA (Java Persistence API), que es la especificación utilizada por Hibernate en Spring Boot.

Definición de los repositorios: Los repositorios son interfaces que extienden la interfaz CrudRepository o JpaRepository de Spring Data JPA. Estas interfaces permiten interactuar con la base de datos de una manera más sencilla, ya que proporcionan métodos para realizar operaciones CRUD (Create, Read, Update, Delete).

Uso de los repositorios en los controladores: Los controladores son los encargados de manejar las solicitudes HTTP que llegan a la aplicación. En estos controladores, se pueden utilizar los repositorios definidos anteriormente para realizar operaciones en la base de datos.

Ejecución de consultas: Para ejecutar consultas personalizadas, se pueden utilizar las anotaciones @Query o @NamedQuery de JPA en los repositorios. Estas anotaciones permiten definir consultas personalizadas utilizando lenguaje SQL o JPQL (Java Persistence Query Language).

Transacciones: Las transacciones se utilizan para garantizar la integridad de los datos en la base de datos. En Spring Boot con Java, se pueden utilizar las anotaciones @Transactional en los métodos que modifican la base de datos para asegurarse de que se realicen de manera atómica.

En resumen, la ORM en Spring Boot con Java es un proceso que se encarga de mapear objetos Java a tablas de base de datos, y permite interactuar con la base de datos de manera más sencilla y orientada a objetos. Esto se logra a través del uso de herramientas como Hibernate y JPA, y siguiendo una serie de pasos para configurar la conexión a la base de datos, definir las clases de entidades y repositorios, y utilizarlos en los controladores.
