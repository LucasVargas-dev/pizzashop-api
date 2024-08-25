import { Elysia } from 'elysia';
import { env } from '../env'

const app = new Elysia();

console.log(env.DATABASE_URL);
app.get('/', () => {
    return "Hello World!";
}); 

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});