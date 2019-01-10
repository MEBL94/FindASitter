import { Injectable } from '@angular/core';
import { Sitter } from '../entities/sitter';
import { SittersState, BabiesState } from '../store';
import { Baby } from '../entities/baby';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  babies: Baby[] = [
    {_id: 1, username: 'adam', password: 'secret', name: 'Adam Larsen', gender: 'male',
      birthDate: new Date(1995, 2, 16), specialNeeds: 'Needs to eat alot of porridge.', address: 'some', zipCode: '2600', city: 'Glostrup'},

    {_id: 2, username: 'viktor', password: 'secret', name: 'Viktor Hansen', gender: 'male',
    birthDate: new Date(1995, 2, 16), specialNeeds: 'Needs social company.', address: 'some', zipCode: '2600', city: 'Glostrup'},

    {_id: 3, username: 'tobias', password: 'secret', name: 'Tobias Andersen', gender: 'male',
      birthDate: new Date(1995, 2, 16), specialNeeds: 'Does not like pacifiers.', address: 'some', zipCode: '2600', city: 'Glostrup'}
  ];

  sitters: Sitter[] = [
    {_id: 1, username: 'azat', password: 'secret', name: 'Azat Baran', gender: 'male',
    birthDate: new Date(1995, 2, 16), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup' },

    {_id: 2, username: 'chrk', password: 'secret', name: 'Christian Kirschberg', gender: 'male',
    birthDate: new Date(1979, 0, 1), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 150, address: 'some', zipCode: '3400', city: 'Hillerød' },

    {_id: 3, username: 'salik', password: 'secret3', name: 'Salik fasdjæ', gender: 'male',
    birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV' }
  ];

  public static getInitialSitterTestState(): SittersState {
    return {isBaby: undefined, isProcessing: false, sitters: [
      {_id: 1, username: 'azat', password: 'secret', name: 'Azat Baran', gender: 'male',
      birthDate: new Date(1995, 2, 16), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup' },

      {_id: 2, username: 'chrk', password: 'secret', name: 'Christian Kirschberg', gender: 'male',
      birthDate: new Date(1979, 0, 1), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 150, address: 'some', zipCode: '3400', city: 'Hillerød' },

      {_id: 3, username: 'salik', password: 'secret3', name: 'Salik fasdjæ', gender: 'male',
      birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV' }
    ]};
  }


  public static getInitialBabyTestState(): BabiesState {
    return {isBaby: undefined, isProcessing: false, babies: [
    {_id: 1, username: 'adam', password: 'secret', name: 'Adam Larsen', gender: 'male',
      birthDate: new Date(1995, 2, 16), specialNeeds: 'Needs to eat alot of porridge.', address: 'some', zipCode: '2600', city: 'Glostrup'},

    {_id: 2, username: 'viktor', password: 'secret', name: 'Viktor Hansen', gender: 'male',
    birthDate: new Date(1995, 2, 16), specialNeeds: 'Needs social company.', address: 'some', zipCode: '2600', city: 'Glostrup'},

    {_id: 3, username: 'tobias', password: 'secret', name: 'Tobias Andersen', gender: 'male',
      birthDate: new Date(1995, 2, 16), specialNeeds: 'Does not like pacifiers.', address: 'some', zipCode: '2600', city: 'Glostrup'}
    ]};
  }


  constructor() { }

  public addSitter(sitter: Sitter): void {
    this.sitters.push(sitter);
  }

  public addBaby(baby: Baby): void {
    this.babies.push(baby);
  }

}
