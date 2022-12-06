import { Component } from '@angular/core';
import * as resources from '../assets/resources/labels'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent {
  labels = resources.labels;
}
