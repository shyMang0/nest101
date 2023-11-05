import { Controller, Get, Query } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello()
	}

	@Get('padas')
	getPadas(
		@Query('par1') param1: string,
		@Query('par2') param2: number = 10,
	): string {
		// Access the values of 'par1' and 'par2' query parameters
		return `Value of par1 is: ${param1}, and value of par2 is: ${
			param2 + 1
		}`
		return this.appService.getPadasParams()
	}
}
