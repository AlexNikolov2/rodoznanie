import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  icons = {
    email: faEnvelope,
    lock: faLock,
  };

  submitted: boolean = false;
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.authService.Login(
      this.form.controls['email'].value,
      this.form.controls['password'].value
    );
    this.form.reset();
    this.router.navigate(['/map']);
  }
}
