import { Router } from 'express';
import { UserExists } from '../middleware/user.middleware';
import * as user from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/register', user.Create);
userRouter.get('/', user.ListAllUser);
userRouter.get('/:nome', UserExists, user.ListOnlyUser);

export { userRouter };
