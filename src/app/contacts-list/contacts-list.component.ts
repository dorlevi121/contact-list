import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { LoaderService } from '../services/loader.service';
import { ContactState } from '../store/contact.reducer';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'contacts-list-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsListComponent implements OnInit {

  public contacts: Observable<{ searchResultContacts: Contact[] }>;
  public isLoading: Observable<boolean>;
  public isMobile: boolean;

  constructor(private store: Store<{ contact: ContactState }>, private loaderServices: LoaderService,
    private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.contacts = this.store.select('contact');
    this.isMobile = this.deviceService.isMobile();
    this.isLoading = this.loaderServices.loadingSub;
  }

}
