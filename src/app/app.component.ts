import {Component} from '@angular/core';
import {ParticipantService} from './participant.service';
import {WinnerService} from './winner.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private winnerService: WinnerService,
              private participantService: ParticipantService,
              private router: Router) {
  }

  reset(): void {
    this.winnerService.saveWinners([]);
    this.participantService.saveParticipants([]);

    this.router.navigateByUrl('/Participants');
  }
}
