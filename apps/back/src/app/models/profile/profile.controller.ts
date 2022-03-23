import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Observable } from 'rxjs';
import { ProfileDto } from '../../../../../../libs/interfaces/src';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('')
  getProfile(): Observable<ProfileDto> {
    return this.profileService.getProfile();
  }
}
