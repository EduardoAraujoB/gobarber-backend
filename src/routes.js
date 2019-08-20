import {
  Router,
} from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Usuário Teste',
    email: 'teste@mail.com',
    password_hash: 'Q@!9hna9dawmd90çpADWmaw9',
  });

  return res.json(user);
});

export default routes;
