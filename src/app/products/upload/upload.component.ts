import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data/data.service';
import { Product } from '../../data/meta';
import { UploadService, UploadParams } from 'angular-upload-files';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  uploadParams: UploadParams;
  progress: string;
  fileCount: number;
  files: any[];

  constructor(private data: DataService,
    private route: ActivatedRoute, private uploadService: UploadService) {
  }
  ngOnInit() {
    this.uploadParams = {
      formDataPropertyName: 'image', 
      extraParams: [{
        paramValueIsFromFile: true,
        paramValue: "name",
        paramName: "filename"
      }]
    }
    this.uploadService.currentUploadProgress.subscribe(
      (progress)=>{
        console.log(progress);
        this.progress = progress;
      }
    )
  }
  readFiles(event) {
    console.log(event, event.files, event.base64s); //read files from here, and if using images base64s also
    this.fileCount = event.files.length;

    // you can manipulate the files here, or just store them
    this.files = event.files;
  }
  uploadDone(event) {
    console.log(event);
    this.fileCount--;

    if(this.fileCount === 0) {
      //files are COMPLETELY done uploading
    }
  }
}
