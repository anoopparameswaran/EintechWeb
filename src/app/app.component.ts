import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Person } from 'src/Entities/Person';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService, DatePipe],
})
export class AppComponent {
  title = 'EintechWeb';
  name: string = '';

  constructor(private appService: AppService, private datePipe: DatePipe) {}

  addPerson() {
    var person = new Person();

    person.Name = this.name;
    person.DateAdded = new Date();

    this.appService.SavePerson(person).subscribe((res: any) => {
      this.name = '';

      alert('New person added succesfully');
    });
  }
}
