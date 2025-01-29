import Koa from "koa";
import Router from "@koa/router";

// impiort routes from user.route.ts
import { userRoutes } from "./routes/user.route";
import { commentRoutes } from "./routes/comment.route";
import { todoRoutes } from "./routes/todo.route";

const app = new Koa();
// Use the router middleware
app.use(userRoutes);
app.use(commentRoutes);
app.use(todoRoutes);
export default app;
