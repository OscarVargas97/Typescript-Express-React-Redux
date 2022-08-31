import { NextFunction } from 'express'
import { expressjwt } from "express-jwt";
import jwt from 'jsonwebtoken';
require('dotenv').config();
//Se debe remplazar por la .env
const secreto = 'misecreto'



export const validateJwt = expressjwt({ secret: secreto, algorithms: ['HS256'] })

export const SignToken = (id: number): string => {
	return jwt.sign({ id }, secreto, { expiresIn: 60 * 3 })
}

export declare const a: () => {
	(req: Request, res: Response, next: NextFunction): Promise<void>;
};