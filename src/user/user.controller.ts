import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<string> {
    let user

    try {
      user = await this.userService.create(createUserDto)
    } catch (error) {
      console.log('UserController.createUser : Unexpected error occured', error)
      throw error
    }

    return user
  }
}
