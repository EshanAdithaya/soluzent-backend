import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiParam,
  ApiBody,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateRootAccountDto } from './dto/CreateRootAccount.dto';
import { UpdateRootAccountDto } from './dto/UpdateRootAccount.dto';
import { RootAccount } from './entitys/root-account.entity';
import { RootAccountService } from './root-account.service';
import { JwtAuthGuard } from 'src/auth.guard';

@ApiTags('Root Accounts')
@ApiBearerAuth()
@Controller('root-accounts')
export class RootAccountController {
  constructor(private readonly rootAccountService: RootAccountService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Created successfully.',
    type: RootAccount,
  })
  @ApiBadRequestResponse({ description: 'Invalid data provided.' })
  async create(@Body() createRootAccountDto: CreateRootAccountDto) {
    return this.rootAccountService.create(createRootAccountDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: 'Root Account ID' })
  @ApiBody({ type: UpdateRootAccountDto })
  @ApiOkResponse({ description: 'Updated successfully.', type: RootAccount })
  @ApiNotFoundResponse({ description: 'Root Account not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateRootAccountDto: UpdateRootAccountDto,
  ): Promise<RootAccount> {
    return this.rootAccountService.update(id, updateRootAccountDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Root Account ID' })
  @ApiOkResponse({ description: 'Found successfully.', type: RootAccount })
  @ApiNotFoundResponse({ description: 'Root Account not found.' })
  async findOne(@Param('id') id: string): Promise<RootAccount> {
    const rootAccount = await this.rootAccountService.findOne(id);
    if (!rootAccount) {
      throw new NotFoundException(`Root Account with id ${id} not found`);
    }
    return rootAccount;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOkResponse({ description: 'Found successfully.', type: RootAccount })
  @ApiNotFoundResponse({ description: 'Root Account not found.' })
  async findall(@Req() req: any) {
    // console.log(req.user.userId);
    return this.rootAccountService.findAll(req.user.userId);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiParam({ name: 'id', description: 'Root Account ID' })
  @ApiOkResponse({ description: 'Deleted successfully.' })
  @ApiNotFoundResponse({ description: 'Root Account not found.' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.rootAccountService.delete(id);
  }
}
