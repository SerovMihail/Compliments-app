import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProfileDto } from '../../../../../../libs/interfaces/src';

@Injectable()
export class ProfileService {
  getProfile(): Observable<ProfileDto> {
    const dto: ProfileDto =  {
      age: faker.datatype.number({min: 18, max: 75}),
      avatarUrl: faker.internet.avatar(),
      balance: faker.datatype.number({min: 1}),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName()
    }

    return of(dto).pipe(delay(1000))
  }
}
