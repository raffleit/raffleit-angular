import {Component, OnInit} from '@angular/core';
import {Winner} from '../winner';
import {ParticipantService} from '../participant.service';
import {WinnerService} from '../winner.service';
import drawWinner from './drawing.util';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {
  winners: Winner[] = [];

  static randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor(private participantService: ParticipantService,
              private winnerService: WinnerService) {
    this.winners = winnerService.getWinners();
  }

  draw(): void {
    const participants = this.participantService.getParticipants().filter(p => p.numberOfTickets > 0);
    const participantWinner = drawWinner(participants);
    const newWinner: Winner = {
      id: DrawingComponent.randomIntFromInterval(1, 99999999),
      name: participantWinner.name
    };
    this.winners.unshift(newWinner);

    const newParticipants = participants.map(p => {
      if (p.id === participantWinner.id) {
        p.numberOfTickets = p.numberOfTickets - 1;
      }
      return p;
    });

    this.participantService.saveParticipants(newParticipants);
    this.winnerService.saveWinners(this.winners);
  }

  ngOnInit() {
  }

}
