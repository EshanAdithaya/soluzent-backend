import {
  Controller,
  Get,
  UseGuards,
  Request,
  Body,
  Param,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth.guard';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile successfully fetched.',
  })
  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.getUserById(req.user.userId);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update user details' })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the user',
    example: 'd1f29c1e-bc71-4a6b-8f1a-6aebc0b3f500',
  })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated',
    schema: {
      example: {
        id: 'd1f29c1e-bc71-4a6b-8f1a-6aebc0b3f500',
        username: 'johndoe',
        email: 'johndoe@example.com',
        phoneNumber: '+1234567890',
        profilePictureUrl: 'https://example.com/profile.jpg',
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        address: '123 Main St, Anytown, USA',
        bio: 'A passionate developer with a love for coding.',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-15T00:00:00.000Z',
        deletedAt: null,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }
}
