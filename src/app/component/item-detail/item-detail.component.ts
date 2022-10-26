import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User, UserForm } from '../../interface/user';

@Component({
             selector:    'app-item-detail',
             templateUrl: './item-detail.component.html',
             styleUrls:   ['./item-detail.component.scss']
           })
export class ItemDetailComponent implements OnInit, OnChanges {
  @Input() selectedUser: User | undefined;
  @Output() saveUserEmitter = new EventEmitter<User>();
  userForm: FormGroup<UserForm> | undefined | null;

  isEdited: boolean | undefined;

  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup<UserForm>(
      {
        first_name: new FormControl(''),
        last_name:  new FormControl(''),
        email:      new FormControl(''),
        job_title:  new FormControl(''),
        city:       new FormControl(''),
        company:    new FormControl('')
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser'].currentValue) {
      const currentValue = changes['selectedUser'].currentValue;
      if (currentValue) {
        this.userForm?.patchValue({
                                    first_name: currentValue.first_name,
                                    last_name:  currentValue.last_name,
                                    email:      currentValue.email,
                                    job_title:  currentValue.job_title,
                                    city:       currentValue.city,
                                    company:    currentValue.company
                                  });
      }
    }
  }

  editToggle(status: boolean): void {
    this.isEdited = status;
    if (!this.isEdited) {
      if (this.selectedUser) {
        this.selectedUser = { ...this.selectedUser, ...this.userForm?.value };
        this.saveUserEmitter.emit(this.selectedUser);
        this.selectedUser = undefined;
      }
    }
  }
}
