## Front-end: React Typescript

Run:

```bash
cd FrontEnd
npm i
npm start
```

## Back-end: Laravel 8x

Install packages:

```bash
cd BackEnd
composer update
npm install
cp .env.example .env
```

Edit your .env:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1    // your host name
DB_PORT=3306         // mysql port
DB_DATABASE=bookstore // database name
DB_USERNAME=root      // database username
DB_PASSWORD=   // database password
```

Generate key for project:

```
php artisan key:generate
```

Sync database:

```
php artisan migrate
php artisan db:seed
```

Storage:link

```
php artisan storage:link
```

Run server:

```
php artisan serve
```
