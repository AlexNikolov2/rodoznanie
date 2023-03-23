import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { HistoryService } from '../history.service';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss'],
})
export class HistoryDetailsComponent {
  story: any;
  storyId!: any;
  currUser?: string | null;

  icons = {
    mail: faEnvelope,
    location: faLocationDot,
  };

  constructor(
    public historyService: HistoryService,
    public route: ActivatedRoute,
    public router: Router,
    public auth: AngularFireAuth,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getUserEmail();
    this.storyId = this.route.snapshot.params['id'];
    this.historyService.getStoryById(this.storyId).subscribe((story: any) => {
      this.story = story;
    });
    this.auth.authState.subscribe((user) => {
      this.currUser = user!.uid;
    });

    this.auth.user.subscribe((user) => (this.currUser = user?.email));
  }

  deletePost() {
    alert('Are you sure you want to delete this post?');
    this.historyService.deleteStory(this.storyId);
    this.router.navigate(['/map']);
  }
}
