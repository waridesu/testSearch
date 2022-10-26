import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) {}

  getMockData():Observable<User[]> {
    return this.httpClient.get<User[]>('assets/mock/user_mock_data.json');
  }
}
