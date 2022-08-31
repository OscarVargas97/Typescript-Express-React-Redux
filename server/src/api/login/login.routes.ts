import { Router, Response, NextFunction } from 'express'
import * as loginController from './login.controller'
import { validateJwt } from '../services/token.services'
import { Request } from 'express-jwt'

const loginRoutes = Router()

loginRoutes.post('/', async (req: Request, res: Response) => {
	return loginController.login(req, res)
})

loginRoutes.get('/lele', validateJwt, async (req: Request, res: Response, next: NextFunction) => {
	return loginController.validate(req, res, next)
})

export default loginRoutes