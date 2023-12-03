export type TSignUpDataType = {
	name: string
	email: string
	key: string
	secret: string
}

export type TGetMyselfData = {
	data: {
		email: string
		id: number
		key: string
		name: string
		secret: string
	}
	isOk: boolean
	message: string
}