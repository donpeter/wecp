#WeCP Creator Task

###Specifications:
Assuming that your application is running on http://localhost the following features has
to be implemented:
- The frontend has to be developed in angular 2 / 4 / 5.
- On visiting http://localhost/:id (where id can be any string) a page should open having
5 images.
- User activity on the page has to be tracked. (Click, Hover on Image)
- On visiting http://localhost/:id/admin all user activity on the page http://localhost/:id
has to be displayed in the form of a list.
- MongoDB should be used be used to store all the user activity information.
- NodeJs should be used as a backend server

## Getting Started 
### Requirement

WeCP was build on the following technologies.

- [Node.js](https://nodejs.org/) v8+
- [MongoDB](https://www.mongodb.com/) v3.6+
- [Angular 5](http://angular.io)
- [Docker](https://www.docker.com/) v17+ (Optional) 
- [Docker-Compose](https://docs.docker.com/compose/install/) v1.19.0+ (Optional)
### Development
This project includes a docker-compose.yml file that setup the enviroment for the server with all all required technology, and get you up and running quickly.

 Docker-Compose will expose port 3000 on the host machine, mounted to port 3000 on the container

Ensure you have [Docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your system. Visit the official docker page for installation procedure.

After installation, running the following command will  output somethig similar 
```sh
$ docker -v
Docker version 17.12.0-ce, build c97c6d6
$ docker-compose -v
docker-compose version 1.19.0, build 9e633ef
```
**Start Server (Node.Js)**
```sh
$ docker-compose -f docker/dev/docker-compose.yml up node
                 OR
$ cd server/
$ npm install
$ npm start

```
This will create the (docker) images and pull in the necessary dependencies.

**Start Client (Angular 5)** Make sure you have angular installed
```sh
$ cd client/
$ npm install
$ ng serve
```
In your preferred browser visit.

```sh
127.0.0.1:4200/:id
or
http://localhost:4200/:id