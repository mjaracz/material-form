import {Controller, Get} from '@nestjs/common';

@Controller('sign-up')
export class SignUpController {
  @Get()
  getSignUp() {
    return (Math.floor(Math.random() * 100) < 50)
      ? { signUp: false }
      : { signUp: true}
  }
}
