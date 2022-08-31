import { Request } from "express-jwt"
export interface IGetUserAuthInfoRequest extends Request {
	user: string // or any other type
}