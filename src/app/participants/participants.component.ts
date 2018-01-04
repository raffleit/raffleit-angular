import {Component, OnInit, Renderer, Renderer2} from '@angular/core';
import {Participant} from '../participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  newParticipant: Participant = ParticipantsComponent.defaultParticipant();
  participants: Participant[] = [];

  static defaultParticipant(): Participant {
    return {
      id: ParticipantsComponent.randomIntFromInterval(1, 9999999),
      name: '',
      numberOfTickets: null
    };
  }

  static randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor(private renderer: Renderer2) {
  }

  onDelete(participant: Participant): void {
    this.participants = this.participants
      .filter(p => p.id !== participant.id);
  }

  ngOnInit() {
  }

  addParticipant() {
    this.participants.push(this.newParticipant);
    this.newParticipant = ParticipantsComponent.defaultParticipant();
    const onElement = this.renderer.selectRootElement('#name');
    onElement.focus();

  }
}
