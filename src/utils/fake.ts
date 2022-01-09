import { IJobCreationData } from '@state/reducer-types';
import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';

const origins = [
  'Disney',
  'Google',
  'Facebook',
  'Microsoft',
  'Apple',
  'Amazon',
];
export const fakeCreationDate = (entries: number): IJobCreationData[] => {
  const data: IJobCreationData[] = [];
  for (let i = 0; i < entries; i++) {
    data.push({
      id: uuidv4(),
      first_review: faker.date.past(),
      last_review: faker.date.recent(),
      averageLenth: faker.datatype.number({ min: 1, max: 300 }),
      origin: origins[Math.floor(Math.random() * origins.length)],
      sourceType: 'csv',
      totalReviews: faker.datatype.number({ min: 1, max: 1000000000 }),
      uploadDate: faker.date.recent(),
      uploadedBy: faker.name.firstName(),
    });
  }
  return data;
};
