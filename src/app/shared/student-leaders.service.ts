import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentLeadersService {

  constructor(private db: AngularFireDatabase) { }

  public getStudentLeaders(): Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    return this.db.list('Trumpets/Student Leaders').valueChanges();
  }
}
