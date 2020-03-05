import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, HttpResponse } from '@rxweb/http';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { RxHttp, http } from "@rxweb/http";
import { anonymous } from '@rxweb/angular-router';
import {FormBuilder,FormGroup} from '@angular/forms';

@anonymous()
@http({
    hostKey: "server",
    path: "api/SearchSearchName"
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  extends RxHttp implements OnInit{
  
  isShowDashboard:boolean = false;
   subscription: Subscription;
   result:any;
   n:String;
  searchForm:FormGroup
  constructor(private browserStorage: BrowserStorage, private router: Router,private formBuilder:FormBuilder) {
    super();
  }
  
  ngOnInit(): void {
    HttpClientConfig.register({
      hostURIs: [{
        name: 'server',
        default: false,
        uri: "https://localhost:44352"
      },
      {
        name: 'local',
        default: true,
        uri: "https://localhost:44352"// 'https://localhost:44376' 
      }],
      filters: [],
    //   // onError: (response: HttpResponse) => {
    //   //   if (response.statusCode == 401
    //   //   ) {
    //   //     this.browserStorage.local.clearAll();
    //   //     // this.baseToastr.error("Timeout")
    //   //     this.router.navigate(["/login"])
    //   //   }
    //     // else if (response.statusCode == HttpResponseCode.InternalServerError) {
    //     //   this.baseToastr.error("Error occur")
    //     // }
    //     else if (response.statusCode == 403) {
    //       this.router.navigate(["/unauthorized"]);
    //     }
    //   }
     })
    var auth = this.browserStorage.local.get("auth");
    if (auth) {
      this.router.navigate(["/users"])
      this.isShowDashboard = true;
    }
    // else {
    //   this.browserStorage.local.clearAll();
    //   this.router.navigate(["/login"])
    //   this.isShowDashboard = false;
    // }

    ReactiveFormConfig.set({
      "validationMessage": {
        "required": "You can't leave this empty",
        "notEmpty": "You can't leave this empty",
        "minLength": "Minimum  characters required",
        "maxLength": "More than {{1}}  characters are not permitted",
        "pattern": "The specified input format is not recognized",
        "compare": "The specified values of {{0}} and {{1}} must be the same",
        "contains": "The specified value must ' in the input",
        "alpha": "You can use letters only",
        "alphaNumeric": "You can use letters, numbers and periods only",
        "range": "You need to enter appropriate value in this field",
        "maxNumber": "You can not enter value more than #n#",
        "numeric": "Only number required",
        "email": "Please enter valid email address",
        "latitude": "Please enter a valid latitude",
        "longitude": "Please enter a valid longitude",
        "url": "{{0}} Is not the correct url pattern.",
        "password": "Password length should be of 8 to 20 characters and should have atleast one uppercase, one lowercase letter, a number and a special character, without any whitespaces"
      }, "reactiveForm": { "errorMessageBindingStrategy": 1 }
     });
     this.searchForm=this.formBuilder.group({
       n:['']
     })
  }

  loginClicked(isClicked: boolean): void {
    if (isClicked) {
      this.isShowDashboard = true;
      this.router.navigate(["/users"])
      setTimeout(() => { this.isShowDashboard = true; }, 50)
    }
  }
  work()
  {
   // this.password=true;

this.router.navigate(["/work"]);

  }
  education()
  {
   // this.password=true;
    this.router.navigate(["/education-details/add"]);
  }
  show=false;
  hide=false;
  Search()
  {
       var t=this.searchForm.controls.n.value;
      this.hide=true;
      var name=t.split(" ");
      var firstname=name[0];
      var lastname=name[1];
 
    this.subscription=this.post({path:'api/SearchSearchName',body:{firstName:firstname,lastName:''}})
    .subscribe((t:any)=>this.result=JSON.parse(t));
            console.log(this.result);
   
    // {   
    //     this.subscription = this.get({params:[i],queryParams:{UserId:this.id}}).subscribe((t: List<EducationDetail>) => {
    //         this.educationDetails = t;
    //     })
    // }


  }
//  password=false;
//  showcp()
//  {

// this.password=false;

//  }
  // changePassword()
  // {
  //        this.password=false;
  //       this.subscription=this.post({path:'api/SearchChangePassword',body:{oldpassword:this.searchForm.controls.oldpassword.value,
  //         newPassword:this.searchForm.controls.newPassword.value,UserId:[1]}}).subscribe(res=>{this.result=res});
  //         console.log(this.result);
  //        this.password=true;


  // }

}
