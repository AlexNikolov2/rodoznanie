import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HistoryService } from '../history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.scss'],
})
export class AddHistoryComponent implements OnInit {
  createForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private historyService: HistoryService,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      history: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.createForm.invalid) {
      return;
    }
    this.historyService.createStory(
      this.createForm.controls['name'].value,
      this.createForm.controls['address'].value,
      this.createForm.controls['history'].value,
      this.createForm.controls['image'].value
    );
    this.createForm.reset();
    this.router.navigate(['/']);
  }
}
