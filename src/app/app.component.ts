import {  AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { SnackBarService } from './services/snack-bar.service';
import { getContacts } from './store/contact.actions';
import { ContactState } from './store/contact.reducer';

@Component({
  selector: 'contacts-list-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('snackBar', { read: ViewContainerRef })
  entry: ViewContainerRef;
  
  constructor(private store: Store<{ contact: ContactState }>, private snackBarService: SnackBarService){}

  ngOnInit(): void {
    this.store.dispatch(getContacts());

  }

  
  ngAfterViewInit(): void {
    this.snackBarService.entry = this.entry;
  }


}
