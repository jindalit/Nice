import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  inputModel: any;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    var XHR = new XMLHttpRequest();
    var FD = new FormData();
    var thisInst = this;

    FD.append('userName', 'cm_nice');
    FD.append('password', 'cm_nice');
    // Define what happens on successful data submission
    XHR.addEventListener('load', function (event) {
      let apiData = (event.target as any);
      const token = JSON.parse(apiData.response).token;
      localStorage.setItem("token",token);      
     // thisInst.data.headers.set('X-Requested-With', "Mobile");
      thisInst.data.fetchData("/mp/products").subscribe(data => {
        let apiData = (data as any);
        thisInst.data.allProducts = JSON.parse(apiData._body).data;
        thisInst.data.fetchData("/mp/categories").subscribe(data => {
          let apiData = (data as any);
          thisInst.data.categories = JSON.parse(apiData._body).data;
          thisInst.data.productByCategory();
        });
      });
      //alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', function (event) {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open('POST', 'http://103.50.212.219:8090/CCKNIA/mlogin');

    // Send our FormData object; HTTP headers are set automatically
    XHR.send(FD);/* 
  
     this.data.postData("/mlogin",this.data.formData).subscribe(data => {
      let apiData = (data as any);
      const token = JSON.parse(apiData._body).id;
      this.data.headers.set('token', token);      
      this.data.fetchData("/mp/products").subscribe(data => {
        let apiData = (data as any);
        this.data.allProducts = JSON.parse(apiData._body).data;
        this.data.fetchData("/mp/categories").subscribe(data => {
          let apiData = (data as any);
          this.data.categories = JSON.parse(apiData._body).data;
          this.data.productByCategory();
        }); 
      }); 
    });   */
  }
}
