import { Component } from '@angular/core';
import * as _ from 'lodash';
import { SpacexServiceService } from './shared/spacex-service.service';
import { Spacex } from './shared/spacex';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  datas;
  constructor(private service: SpacexServiceService) {
    this.get_data();
  }


  get_data() {
    this.service.get_data().subscribe(
      dat => {
      this.datas = dat;
        this.datas[47].image="";
        console.log(this.datas)
      },
      error => console.log(error)
    );
  }


  flatten(obj) {
    const result = {};
    for (const i in obj) {

      if (typeof obj[i] === 'object') {
        const flatobj = this.flatten(obj[i]);

        for (const x in flatobj) {
          result[i + '_' + x] = flatobj[x];
        }
      } else {
        result[i] = obj[i];
      }
    }

    return result;

  }

}
