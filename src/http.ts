//Declaring and Importing 
import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io"
import path from "path"

import { routes } from "./routes";
import "./database";

const server = express()

// Server **

// *** Enabling HTML ***
server.use(express.static(path.join(__dirname, "..", "public")));
server.set("views", path.join(__dirname, "..", "public"));
server.engine("html", require("ejs").renderFile);
server.set("view engine", "html")

const http = createServer(server); //Creating Http protocol **
const io = new Server(http); // Creating WebSocket(ws) protocol **

// Enabling responses to json format
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use(routes) //Using routes 

export { http, io }