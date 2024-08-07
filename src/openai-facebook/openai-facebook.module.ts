import { Module } from '@nestjs/common';
import { OpenaiFacebookService } from './openai-facebook.service';
import { OpenaiFacebookController } from './openai-facebook.controller';
import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacebookPageModule } from 'src/facebook-page/facebook-page.module';

@Module({
  imports: [
    FacebookPageModule,
    TypeOrmModule.forFeature([FacebookPage]), // Ensure both entities are imported
  ],
  providers: [OpenaiFacebookService],
  controllers: [OpenaiFacebookController],
})
export class OpenaiFacebookModule {}
