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
      localStorage.setItem("username",JSON.parse(apiData.response).name);      
     // thisInst.data.headers.set('X-Requested-With', "Mobile");
      thisInst.data.getAllProduct();
      //alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', function (event) {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open('POST', 'http://103.50.212.219:8090/CCKNIA/mlogin');

    // Send our FormData object; HTTP headers are set automatically
    XHR.send(FD);
  }
  selectVariant(event,index){
    let currentElm = event.target;
    let parent = currentElm.parentElement.parentElement;
    for(let i=0;i<parent.childNodes.length;i++){
      //console.log(parent.childNodes[i])
      if(parent.childNodes[i].tagName && parent.childNodes[i].classList.contains('current')){
        parent.childNodes[i].classList.remove('current')
        parent.childNodes[i].children[0].style.display = 'none'
        parent.childNodes[i].children[1].classList.remove('badge-info')
        parent.childNodes[i].children[1].classList.add('badge-primary')
      }
    }
    currentElm.parentElement.classList.add('current')
    for(let i=0;i<parent.childNodes.length;i++){
      if(parent.childNodes[i].tagName && parent.childNodes[i].classList.contains('current')){
        parent.childNodes[i].children[0].style.display = 'flex'
        parent.childNodes[i].children[1].classList.add('badge-info')
      }
    }
  }
}
