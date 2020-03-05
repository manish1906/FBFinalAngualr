import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vUserProfile,CoverPhoto,ProfilePhoto } from '@app/models';
import { AbstractvUserProfile } from '../domain/abstract-v-user-profile';
import { List } from '@rxweb/generics';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { anonymous } from '@rxweb/angular-router';

@anonymous()
@Component({
    selector: "app-v-user-profile-add",
    templateUrl: './v-user-profile-add.component.html'
    // styleUrls: [ './v-user-profile-add.component.css' ]

})
export class vUserProfileAddComponent extends AbstractvUserProfile implements OnInit, OnDestroy {
    vUserProfile: vUserProfile;
    subscription: Subscription;
    ProfilePhoto:ProfilePhoto;
    CoverPhoto:CoverPhoto;
    result:any;
    userprofile:List<vUserProfile>;
    id: any;
    PhotoFormGroup:FormGroup;
 
    constructor(private formBuilder: RxFormBuilder,private photoformBuilder:FormBuilder) {
        super();
       

            // console.log(this.result); 
       // this.Get();
       this.get({params:[1],queryParams:{UserId:1}}).subscribe(res => {
        this.result = res;     
     })
        console.log(this.result); 
    }

    ngOnInit(): void {
       
        this.vUserProfile = new vUserProfile();
        this.vUserProfileFormGroup = this.formBuilder.formGroup(this.vUserProfile) as IFormGroup<vUserProfile>;
        // this.PhotoFormGroup=this.photoformBuilder.group({
        //     cover:[''],
        //     profile:['']
        // })
        this.PhotoFormGroup=new FormGroup({
            cover:new FormControl(),
            profile:new FormControl()
        });
    //  this.Get();
        
 
    }
    // Get() {
    //    this.get({params:[1],queryParams:{UserId:1}}).subscribe(res => {
    //     this.result = res;      })
    //     console.log(this.result);     
    //  }
    changeCoverPhoto()
    {
        this.subscription=this.post({path:"api/SearchChangeCoverPhoto",body:{Coverphoto:this.PhotoFormGroup.controls.cover.value,id:1}})
        .subscribe((t:any)=>{this.result=t;})
        console.log(this.PhotoFormGroup);
              //  console.log(this.result);
              //  console.log(this.id);
              
    }
    changeProfilePhoto()
    {
        console.log(this.vUserProfileFormGroup);
        this.subscription=this.post({path:"api/SearchChangeProfilePhoto",body:{photo:this.PhotoFormGroup.controls.profile.value,id:1}})
        .subscribe((t:any)=>{this.result=t});
        console.log(this.id);

    //     this.post({path:'api/SearchChangeProfilePhoto',body:{Photo:this.vUserProfileFormGroup.controls.profilephoto.value,id:1}})
    //     .subscribe(res=>{this.result=res;
    //    console.log(this.result);
    //    }
    //        )

    }
    // GetBy(i:number)
    // {   
    //     this.subscription = this.get({params:[i],queryParams:{UserId:this.id}}).subscribe((t: List<vUserProfile>) => {
    //         this.userprofile = t;
    //     })
    // }
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
 



}
