import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss'],
})
export class HistoryDetailsComponent {
  story: any;
  postId!: any;
  currUser?: string | null;

  constructor(
    public historyService: HistoryService,
    public route: ActivatedRoute,
    public router: Router,
    public auth: AngularFireAuth,
    public authService: AuthService
  ) {}
}
