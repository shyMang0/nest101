import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	)

	const config = new DocumentBuilder()
		.setTitle('Quiz API Example')
		.setDescription('The Quiz Api Nest Sample')
		.setVersion('0.1')
		.addTag('Quiz')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('openapi', app, document)

	await app.listen(3000)
	console.log('Listening on port : ', 3000)
}
bootstrap()
