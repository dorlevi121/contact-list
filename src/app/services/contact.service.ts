import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { filterContacts } from '../store/contact.actions';
import { ContactState } from '../store/contact.reducer';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private api: ApiService, private store: Store<{ contact: ContactState }>) { }

  public getContacts() {
    return this.api.get(environment.api);
  }

  public filterContact(searchTerm: string): void {    
    this.store.dispatch(filterContacts({ searchTerm }));
  }
}
