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
    knex.select('*').from('todo')
        .then(data => {
            res.send(data);
        })
        .catch(err => { 
            console.log(err);
            res.send(`Error ${err}`);
        });
    }
);

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
