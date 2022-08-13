import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, of } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'contacts-list-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.form = fb.group({
      search: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
    })
  }

  ngOnInit(): void {

    this.form.controls['search'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(value => {
      this.filterContacts(value);
    })
  }

  public filterContacts(value: string): void {
    if (!this.form.valid && value.length === 1)
      return;

    this.contactService.filterContact(value);
  }
}
