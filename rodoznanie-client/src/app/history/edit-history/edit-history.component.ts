import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore } from '@angular/fire/firestore';
import { HistoryService } from '../history.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-history',
  templateUrl: './edit-history.component.html',
  styleUrls: ['./edit-history.component.scss'],
})
export class EditHistoryComponent {
  editForm: FormGroup;
  story: any;
  editLink!: string;
  submitted: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public historyService: HistoryService,
    public fireauth: AngularFireAuth,
    public fb: FormBuilder,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      history: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.historyService
      .getStoryById(this.route.snapshot.params['id'])
      .subscribe((story: any) => {
        this.story = story;
        this.editLink = '/edit/' + this.route.snapshot.params['id'];
        this.editForm.controls['name'].setValue(story.name);
        this.editForm.controls['address'].setValue(story.address);
        this.editForm.controls['history'].setValue(story.history);
        this.editForm.controls['image'].setValue(story.image);
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      const storyObject = {
        ...this.story,
        ...{
          name: this.editForm.controls['name'].value,
          address: this.editForm.controls['address'].value,
          history: this.editForm.controls['history'].value,
          image: this.editForm.controls['image'].value,
        },
      };
      this.historyService.editStory(
        storyObject,
        this.route.snapshot.params['id']
      );
      this.editForm.reset();
      this.router.navigate([
        '/history-details/' + this.route.snapshot.params['id'],
      ]);
    } else {
      return;
    }
  }
}
