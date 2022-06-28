# ReactBoard

## Autor

Jhon Sebastian Piñeros Barrera

## Fecha

27/06/2022

## Descripcion

Este proyecto consiste en realizar el diseño y construccion de un tablero interactivo que permita a múltiples usuarios dibujar en un tablero compartido para posteriormente realizar su despliegue en heroku.

Para ejecutar la aplicacion de manera local por consola debemos digitar:

```
mvn package

mvn spring-boot:run 
```

y posteriormente buscamos en el browser:

```
localhost:8080
```

### LOC/h

Se realizaron 272 lineas de codigo en aproximadamente 9 horas de trabajo, es decir, 30.22 lineas de codigo por hora.

### Prerrequisitos

- JAVA
- HTML
- Maven
- GIT
- Heroku

### Diagrama de clases

[![image.png](https://i.postimg.cc/QCtsZfXg/image.png)](https://postimg.cc/WFQxM6qt)

### Descripcion diagrama de clases

En el diagrama de clases se puede observar que para el diseño de este proyecto se implementaron las clases:

- WebSiteController: Esta clase implementa el controlador del sitio web con spring.
- WebSiteSocket: Esta clase es la encargada de ejecutar la colaboracion en tiempo real de la aplicacion.

### Estructura del proyecto

```
C:.
└───main
    ├───java
    │   └───co
    │       └───edu
    │           └───escuelaing
    │               └───reactprimerlive
    │                   ├───WebSiteController.java
    │                   └───WebSiteSocket.java
    └───resources
        └───static
            ├───img
            |   ├───eraser.java
            |   └───paintbrush.java
            └───js
                ├───board.html
                ├───classIntro.html
                └───index.html

```

### Heroku Link

https://reactjsboard.herokuapp.com/

### JavaDoc

El javadoc se puede vizualizar con el comando 

```
mvn javadoc:javadoc
```

y posteriormente vamos a la carpeta de nuestro proyecto y buscamos en target/site/apidocs/index.html