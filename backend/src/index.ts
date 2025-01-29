import Koa from "koa";
import Router from "@koa/router";
import knex from 'knex'

const router = new Router();

const knexClient = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
});

// Define routes
router.get("/", (ctx) => {
  ctx.body = "Hello, World from Router";
});

router.get("/todo", (ctx) => {
  ctx.body = `Book requested for id: ${ctx.params.id}`;
});

const PORT = 8080;

const app = new Koa();

// Use the router middleware
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// app.get('/', (req, res) => {
//     knex.select('*').from('user')
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             console.log(err);
//             res.send(`Error ${err}`);
//         });
//     }
// );

// app.get('/todo', (req, res) => {
//     knex('todo')
//         .select('todo.*', 'user.name as user_name', 'user.email as user_email')
//         .leftJoin('user', 'todo.user_id', 'user.id')
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ error: 'An error occurred while fetching todos' });
//         });
// });

// app.get('/comment', (req, res) => {
//     knex.select('*').from('comment')
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             console.log(err);
//             res.send(`Error ${err}`);
//         });
//     }
// );

// app.get('/data', (req, res) => {
//     res.send('Hello');
//     }
// );
