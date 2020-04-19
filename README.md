# loopback2-angular4

## Setup

Run the server:

```sh
$ docker-compose up
```

Run the Angular app.

```sh
$ cd client-src
$ docker-compose up
```

## Build

Development mode:

```sh
$ docker-compose run --rm client-angular ng build
```

Production mode:

```sh
$ docker-compose run --rm client-angular ng build --prod
```

## License

MIT
