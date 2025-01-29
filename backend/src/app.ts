import Koa from "koa";

// Middlewares
import { knexMiddleware } from "./middlewares/knexMiddleware";

// impiort routes from user.route.ts
import { userRoutes } from "./routes/user.route";
import { commentRoutes } from "./routes/comment.route";
import { todoRoutes } from "./routes/todo.route";

const app = new Koa();


app.use(knexMiddleware);

app.use(userRoutes);
app.use(commentRoutes);
app.use(todoRoutes);

export default app;
