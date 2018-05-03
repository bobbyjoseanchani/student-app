import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MyComponent } from './my-component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ComponentService {

  constructor(private http: HttpClient) { }

  private componentsUrl = 'api/components'; 

  getComponents (): Observable<MyComponent[]> {
    return this.http.get<MyComponent[]>(this.componentsUrl)
  }

  addComponent (component: MyComponent): Observable<MyComponent> {
    return this.http.post<MyComponent>(this.componentsUrl, component, httpOptions);
  }  

  updateComponent (component: MyComponent): Observable<any> {
    console.log('updating existing component');
    console.log(component);
    return this.http.put(this.componentsUrl, component, httpOptions);
  }

  deleteComponent (component: MyComponent | number): Observable<MyComponent> {
    const id = typeof component === 'number' ? component : component.id;
    const url = `${this.componentsUrl}/${id}`;  
    return this.http.delete<MyComponent>(url, httpOptions);
  }

}
