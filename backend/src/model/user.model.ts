import { Schema, model } from 'mongoose';
import { UserTypes } from '../@types/user.types';

const schema = new Schema<UserTypes>({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    
});

export const UserModel = model<UserTypes>('user', schema);
