# Steps

1) Create new web project

2) Initialize the folder with git
```bash
    git init .
```

3) Initialize it with npm
```bash
    npm init
```

4) Add engines and start script in package.json

5) Create account on heroku.com

6) Install heroku cli
```bash
    npm i -g heroku-cli
```

7) To create app:
```bash
    heroku apps:create <appname>
```

8) To add addons:
```sh
    heroku addons:add <addonname>:<planname>
    eg:
    heroku addons:add heroku-postgresql:hobby-dev
```

9) Create config:

    5.1) Change from hardcoded port to 'process.env.PORT'

    5.2) Change from hardcoded db_url to 'process.env.DATABASE_URL'

10) To push to heroku
```js
    git push heroku master
```

After connecting github repository and heroku:
```js
    git push origin master
```