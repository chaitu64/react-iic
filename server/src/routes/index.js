import { Router } from "express";
import eventRoutes from "./event.routes.js";
import teamRoutes from "./team.routes.js";
import galleryRoutes from "./gallery.routes.js";
import adminRoute from "./admin.route.js";
import challengeRoutes from "./challenge.routes.js";
const api = Router();

api.use("/events", eventRoutes);
api.use("/team", teamRoutes);
api.use("/gallery", galleryRoutes);
api.use("/admin", adminRoute);
api.use("/challenges", challengeRoutes);
export default api;