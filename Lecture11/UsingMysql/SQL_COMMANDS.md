# SQL Commands

## Start SQL and Login

 1. Start MySQL service
 2. Login to MYSQL as root

```
mysql -u root -p
```

## Create New user and DB, and grant access

Inside mysql terminal -
```mysql

create database mytestdb;
create user testuser identified by 'testpass';

grant all privileges on mytestdb.* to testuser;

```

## Login with new user

```shell
mysql -u testuser
```

## Create Table

```mysql
use mytestdb;

create table todos
    (id integer primary key auto_increment,
     task varchar(255),
     done boolean
    );

```

## Insert a Todo

```mysql

insert into todos (task, done)
    values('one task', false);
