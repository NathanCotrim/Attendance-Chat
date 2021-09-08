<p align="center">
  <a href="" rel="noopener">
 <img src="https://www.agenciaeplus.com.br/wp-content/uploads/2019/04/atendente1.jpg" alt="Project logo"></a>
</p>

<h1 align="center">Attendance Chat</h1>

## Description <a name = "about"></a>

It is a fullstack application developed in Rocketseat - NLW #5 with Typescript, nodeJs, Sqlite and Typeorm!
<br>

## Usage and Installation

Just clone this repo and run:

```
npm install
```

```
npm run typeorm migration:run
```

```
npm run dev
```
<br>

## Features and Requirements

### API + Socket

+ All connections are saved at database;
+ You can get a connection by User ID;
+ You can find all connections without an admin;
+ You can find a connection by socket ID;
+ You can update admin ID;
+ All messages are saved at database;
+ You can list messages by User;
+ You can create settings;
+ You can update settings;
+ You can find settings by username;
+ If an email is not registered, it is auto created;
+ You can find a user by email;

### Frontend

As customer:
+ You can start a conversation with an attendance;
+ You can see it messages;
+ You can go out conversation;

As attendant:
+ You can see all conversations without an attendant;
+ You can start a attendance;
+ You can close it;

<br>

## Covered Concepts

+ Orm - Typeorm;
+ Migrations;
+ API - Creation and Consume;
+ Web Socket Protocol (real time communication);
+ 1:1 associations;
+ 1:n associations;
+ SQLite


<br>



