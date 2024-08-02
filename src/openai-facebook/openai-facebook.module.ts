import { Module } from '@nestjs/common';
import { OpenaiFacebookService } from './openai-facebook.service';
import { OpenaiFacebookController } from './openai-facebook.controller';

@Module({
  providers: [OpenaiFacebookService],
  controllers: [OpenaiFacebookController]
})
export class OpenaiFacebookModule {}
