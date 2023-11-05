// import { Type } from 'class-transformer'
// import { Transform, plainToClass } from 'class-transformer'
// import { Type } from 'class-transformer'
import { IsNotEmpty, Length } from 'class-validator'

// @Type(() => CreateQuizDto)
export class CreateQuizDto {
	@IsNotEmpty({ message: 'must have title value' })
	@Length(3, 255)
	title: string

	@Length(3, 255)
	description: string

	// @Type(() => CreateQuizDto, {
	// 	whitelist: true,
	// })
	// static fromDto(dto: CreateQuizDto) {
	// 	return dto
	// }
	// @Transform(({ value }) => plainToClass(CreateQuizDto, value), {
	// 	toClassOnly: true,
	// })
	// static fromDto(dto: CreateQuizDto) {
	// 	return plainToClass(CreateQuizDto, dto)
	// }
}
