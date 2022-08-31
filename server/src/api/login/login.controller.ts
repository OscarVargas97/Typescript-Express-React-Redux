import { Response, NextFunction } from 'express'
import { HttpResponse } from '../services/http.response.services'
import * as userServices from '../user/user.service'
import { SignToken } from '../services/token.services'
import { Request } from "express-jwt"
import bcrypt from 'bcrypt'


export const login = async (req: Request, res: Response): Promise<Response> => {
	try {
		const user = await userServices.getByEmail(req.body.email)
		if (user) {
			if (await bcrypt.compare(req.body.password, user.password)) {
				const signed = SignToken(user.id)
				return HttpResponse.Ok(res, signed)
			}
		}
		return HttpResponse.Forbidden(res, 'usuario o contraseña invalida')
	} catch {
		return HttpResponse.InternalServerError(res, "hubo un error")
	}
}

export const validate = async (req: Request, _res: Response, _next: NextFunction) => {
	console.log(req.auth)
}
