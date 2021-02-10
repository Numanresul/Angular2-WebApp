import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from './service/member-service.service';
import * as fileSaver from 'file-saver';
@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.css']
})
export class ProjectMembersComponent implements OnInit {

  constructor(private fileService: MemberServiceService) { }

  ngOnInit(): void {
  }
  download() {
    this.fileService.downloadFile().subscribe((response:any) => {
			let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, 'person.pdf');
		}),() => console.info('File downloaded successfully');
  }
}
