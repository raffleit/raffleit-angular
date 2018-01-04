import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {Winner} from './winner';

@Injectable()
export class WinnerService {

  constructor(private localStorageService: LocalStorageService) {
  }

  getWinners(): Winner[] {
    return JSON.parse(this.localStorageService.get('winners')) || [];
  }

  saveWinners(winners: Winner[]): void {
    this.localStorageService.set('winners', JSON.stringify(winners));
  }

}
