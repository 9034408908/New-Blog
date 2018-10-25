import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/Observable";
@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor( private http: HttpClient ) { }

 create(data?):Observable<any>{
     return this.http.post('https://employees-38b0a.firebaseio.com/employ.json',data)
   }
    get():Observable<any>{
     return this.http.get('https://employees-38b0a.firebaseio.com/employ.json')
   }
   update(id,emp):Observable<any>{
     return this.http.put('https://employees-38b0a.firebaseio.com/employ/'+id+'.json', emp)
   }
   delete(id):Observable<any>{
     return this.http.delete('https://employees-38b0a.firebaseio.com/employ/' + id + '.json')
   }
}
