const express = require('express');
const app = express();
const PORT = 8000;

const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
});

app.get('/', (req, res) => {
    knex.select('*').from('user')
        .then(data => {
            res.send(data);
        })
        .catch(err => { 
            console.log(err);
            res.send(`Error ${err}`);
        });
    }
);

app.get('/todo', (req, res) => {
    knex('todo')
        .select('todo.*', 'user.name as user_name', 'user.email as user_email')
        .leftJoin('user', 'todo.user_id', 'user.id')
        .then(data => {
            res.json(data);
        })
        .catch(err => { 
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching todos' });
        });
});


app.get('/comment', (req, res) => {
    knex.select('*').from('comment')
        .then(data => {
            res.send(data);
        })
        .catch(err => { 
            console.log(err);
            res.send(`Error ${err}`);
        });
    }
);

app.get('/data', (req, res) => {
    res.send('Hello');
    }
);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    }
);
