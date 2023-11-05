// import { Type } from 'class-transformer'
// import { Transform, plainToClass } from 'class-transformer'
// import { Type } from 'class-transformer'
import { Transform } from 'class-transformer'
import {
	IsInt,
	IsNotEmpty,
	IsNumber,
	IsNumberString,
	Length,
} from 'class-validator'

// @Type(() => CreateQuizDto)
export class SearchQuiz {
	@IsNotEmpty({ message: 'must have title value' })
	@Length(3, 255)
	title: string

	@IsNumberString()
	@Transform(({ value }) => parseInt(value))
	page: number

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
