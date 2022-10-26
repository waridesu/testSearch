import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { User, SearchForm } from '../../interface/user';
import { ItemService } from '../../service/item.service';

@Component({
             selector:    'app-items-list',
             templateUrl: './items-list.component.html',
             styleUrls:   ['./items-list.component.scss']
           })
export class ItemsListComponent implements OnInit {
  @Input() savedUser: User | undefined;
  @Output() userEmitter = new EventEmitter<User>();
  searchForm: FormGroup<SearchForm> | undefined | null;
  users: User[] | undefined;
  filteredUsers: User[] | undefined;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup<SearchForm>(
      {
        search: new FormControl('')
      });

    this.itemService.getMockData().subscribe(res => {
      this.users = res;
      this.filteredUsers = this.users;
    });
    this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(res => {
      if (res) {
        const inputToLowerCase = res.toLowerCase();

        this.filteredUsers = this.filteredUsers?.filter(
          el => el.first_name?.toLowerCase().includes(inputToLowerCase)
            || el.last_name?.toLowerCase().includes(inputToLowerCase)
            || el.job_title?.toLowerCase().includes(inputToLowerCase)
        );
      } else {
        this.filteredUsers = this.users;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const saveCondition = changes['savedUser'].currentValue && changes['savedUser'].currentValue !== changes['savedUser'].previousValue;
    if (saveCondition && this.users && this.savedUser) {
      const savedElementIndex = this.users.findIndex(el => el.id === this.savedUser?.id);
      this.users[savedElementIndex] = this.savedUser;
      this.filteredUsers = this.users;
    }
  }

  getUser(user: User): void {
    this.userEmitter.emit(user);
  }
}
