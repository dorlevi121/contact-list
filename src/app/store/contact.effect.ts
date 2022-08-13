import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, pipe, map, catchError, of } from "rxjs";
import { ContactService } from "../services/contact.service";
import * as ContactAction from "./contact.actions";


@Injectable()
export class ContactEffects {

    constructor(private actions: Actions, private contactService: ContactService) { }

    getContacts$ = createEffect(() =>
        this.actions.pipe(
            ofType(ContactAction.getContacts),
            exhaustMap(() =>
                this.contactService.getContacts().pipe(
                    map((contacts) => ContactAction.getContactSuccess({contacts})),
                    // catchError((error) => of(this.snackBarService.open(''))),
                )
            )
        )
    );
}