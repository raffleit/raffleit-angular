import {Injectable} from '@angular/core';
import {Participant} from './participant';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class ParticipantService {
  constructor(private localStorageService: LocalStorageService) {
  }

  getParticipants(): Participant[] {
    return JSON.parse(this.localStorageService.get('participants')) || [];
  }

  saveParticipants(participants: Participant[]): void {
    this.localStorageService.set('participants', JSON.stringify(participants));
  }

}
