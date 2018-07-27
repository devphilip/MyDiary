import express from 'express';
import bodyParser from 'body-parser';
import entriesRoute from './routes/entriesRoute';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => res.send('Welcome to the world\'s most interesting Journal app!'));

app.use('/api/v1', entriesRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server is listening on port 8000');
});

export default app;