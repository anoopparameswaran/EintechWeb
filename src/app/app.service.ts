import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/Entities/Person';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  SavePerson(person: Person) {
    return this.http.post('http://localhost:64237/api/person', person);
  }
}
