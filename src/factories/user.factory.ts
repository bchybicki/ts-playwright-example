import { faker } from '@faker-js/faker';
import { UserInfoModel } from '../models/user-info.model';

export function prepareRandomUser(): UserInfoModel {
  return {
    firstName: faker.person.firstName().replace(/[^A-Za-z]/g, ''),
    lastName: faker.person.lastName().replace(/[^A-Za-z]/g, ''),
    zip: faker.location.zipCode(),
  };
}
