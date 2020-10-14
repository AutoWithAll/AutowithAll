import { Ad } from './ad.model';
import { Package } from './package';
import { User } from './user.model';

export class Payment{
     id: number;
     User: User;
     advertisement: Ad;
     packege: Package;
}