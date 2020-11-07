import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('👌 Listening on 3333');
});
