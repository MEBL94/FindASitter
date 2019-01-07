import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TempDataService } from '../services/temp-data.service';
import { Router } from '@angular/router';
import { SittersActions } from '../sitters-list/sitters.actions';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { Sitter } from '../entities/sitter';
import { Baby } from '../entities/baby';
import { BabiesActions} from '../babies-list/babies.actions';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
  })
export class RegisterComponent {
  registerSitterForm: any;
  registerBabyForm: any;
  isBaby: boolean;
  isProcessing = false;

  constructor(private fb: FormBuilder, private data: TempDataService,
    private router: Router,
    private sittersActions: SittersActions,
    private babiesActions: BabiesActions,
    private ngRedux: NgRedux<AppState>) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // Here the component subscribes to the sitters state.
    // When someone changes the sitters state, this function is
    // called, setting the isBaby variable to be the value of
    // the isBaby var. in the state.
    this.ngRedux.select(state => state.sitters)
    .subscribe((sitterState) => {
      this.isBaby = sitterState.isBaby;
      this.isProcessing = sitterState.isProcessing;
    });

    this.registerSitterForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      noCriminalRecord: [false, Validators.required],
      noChildRecord: [false, Validators.required],
      hourlyWage: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.registerBabyForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      specialNeeds: ['', !Validators.required]
    });
  }

  get usernameSitter() {
    return this.registerSitterForm.get('username');
  }

  get usernameBaby() {
    return this.registerBabyForm.get('username');
  }

  get passwordSitter() {
    return this.registerSitterForm.get('password');
  }

  get passwordBaby() {
    return this.registerBabyForm.get('password');
  }

  onSubmitSitter(form) {
    const sitter = form.value as Sitter;

    if (this.registerSitterForm.valid) {
    this.sittersActions.createSitter(sitter);
    this.router.navigate(['/login']);
    }
  }

  onSubmitBaby(form) {
    const baby = form.value as Baby;
    if (this.registerBabyForm.valid) {
      this.babiesActions.createBaby(baby);
      this.router.navigate(['/login']);
    }
  }
}
