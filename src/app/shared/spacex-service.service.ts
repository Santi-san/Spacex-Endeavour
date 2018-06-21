import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Spacex } from './spacex';
@Injectable()
export class SpacexServiceService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://api.spacexdata.com/v2/launches';
  }

  get_data(): Observable<any> {

    return this.http.get(this.url).pipe(
      map(function(data: any){
        
       return  data.map(content => {
         return  {mission_name : content.mission_name,launch_year:content.launch_year,image:content.links.mission_patch_small,launch_success:content.launch_success,launch_details:content.details}
         });
      }
        
      )
    );
  }
}
