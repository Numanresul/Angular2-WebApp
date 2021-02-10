import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  constructor(private http: HttpClient) { }

  downloadFile(): any {
		return this.http.get('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', {responseType: 'blob'});
  }
}
