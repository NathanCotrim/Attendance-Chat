// Imports ==================
import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController
const usersController = new UsersController
const messagesController = new MessagesController

// Routes ===================

// Get =====
routes.get("/messages/:id", messagesController.showByUser)
routes.get("/settings/:username", settingsController.findByUsername)
routes.get("/pages/client", (req, res) => {
    return res.render("html/client.html")
})
routes.get("/pages/admin", (req, res) => {
    return res.render("html/admin.html")
})

// Post =====
routes.post("/settings", settingsController.create)
routes.post("/users", usersController.create)
routes.post("/messages", messagesController.create)

// Put =====
routes.put("/settings/:username", settingsController.update)


export { routes }

