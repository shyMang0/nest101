import {
	Body,
	Controller,
	Get,
	Post,
	Query,
	// UsePipes,
	// ValidationPipe,
} from '@nestjs/common'
import { CreateQuizDto } from './dto/CreateQuiz.dto'
// import { Type } from 'class-transformer'

@Controller('quiz')
// @UsePipes(
// 	new ValidationPipe({
// 		whitelist: true,
// 		// forbidNonWhitelisted: true,
// 	}),
// )
export class QuizController {
	@Get('/')
	getAllQuiz(@Query() quizData: any) {
		return quizData
		return 'all quizes'
	}

	// @UsePipes(
	// 	new ValidationPipe({
	// 		whitelist: true,
	// 		// forbidNonWhitelisted: true,
	// 	}),
	// )
	@Post('/')
	createQuiz(@Body() quizData: CreateQuizDto) {
		// async register(@Type(() => UserRegistrationDto) @Body() userRegistrationDto: UserRegistrationDto) {
		return quizData
		return 'a post quiz'
	}
}
