import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { QualificationComponent } from './qualification/qualification.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
