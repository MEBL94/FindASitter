import { TempDataService } from '../services/temp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SittersActions } from '../sitters-list/sitters.actions';
import { Sitter } from '../entities/sitter';
import { Baby } from '../entities/baby';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginBabyForm: any;
  loginSitterForm: any;
  isBaby: boolean;
  isProcessing = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tmp: TempDataService,
    private sittersActions: SittersActions,
    private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.ngRedux.select(state => state.sitters)
    .subscribe((sitterState) => {
      this.isBaby = sitterState.isBaby;
      this.isProcessing = sitterState.isProcessing;
    });

    this.loginBabyForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', Validators.required]
      }
    );

    this.loginSitterForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', Validators.required]
      }
    );
  }

  onSubmitBaby(form) {
    if (this.loginBabyForm.valid) {
      // Send request to back-end to validate login.
      this.authService.login().subscribe(result => {
        // Navigate based on a certain condition.
        this.router.navigate(['/portal/findasitter']);
      });
    } else {
      // Punish user for not filling out fields.
    }
    console.log(this.loginBabyForm);
  }

  onSubmitSitter(form) {
    if (this.loginSitterForm.valid) {
      this.authService.login().subscribe(result => {
        this.router.navigate(['/portal/findababy']);
      });
    }
    console.log(this.loginSitterForm);
  }
}
