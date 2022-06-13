import {Request, Response } from 'express';
import { UserModel } from '../model/user.model';


async function Create(req: Request, res: Response) {
    const user = req.body;

    const newUser = await UserModel.create(user);
    return res.status(201).json(newUser);
}


async function ListOnlyUser(req: Request, res: Response) {
    const user = await UserModel.findOne({ nome: req.params.nome });
    return res.status(200).json(user);
   
}

async function ListAllUser(req: Request, res: Response) {
    const user = await UserModel.find();
    if (user) return res.status(200).json(user);

    res.status(404).json({ message: 'user not found' });
}

export { Create, ListOnlyUser, ListAllUser };
