import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [ProfileService],
  exports: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
