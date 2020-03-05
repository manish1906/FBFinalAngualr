import { Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RouteProvider } from "@rxweb/angular-router"
import { Injectable, Component } from '@angular/core';
import { FacebookUserWorkAddComponent } from '../facebook-user-work/facebook-user-works/add/facebook-user-work-add.component';
import { FacebookUserWorkEditComponent } from '../facebook-user-work/facebook-user-works/edit/facebook-user-work-edit.component';
import { EducationDetailAddComponent } from '../education-detail/education-details/add/education-detail-add.component';
import { vUserProfileAddComponent } from '../user-profile-detail/v-user-profiles/add/v-user-profile-add.component';
var routings = [
    // {
    //     path: '', redirectTo: 'login', pathMatch: 'full',
    // },
    // {
    //     path: "login",
    //     loadChildren: () => import("../login/login.module").then(m => m.LoginModule),
	// },
	{
				path:'work' ,component:FacebookUserWorkAddComponent

	}
,
{
	path:'editWork' ,component:FacebookUserWorkEditComponent

}
,
 {
 	path:'vUserProfile' ,component:vUserProfileAddComponent

 },
 {
	path:'Education' ,component:EducationDetailAddComponent

},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "facebook-user-works",
			loadChildren: () => import("../facebook-user-work/facebook-user-works/facebook-user-work.module").then(m => m.FacebookUserWorkModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "facebook-user-works",
			loadChildren: () => import("../facebook-user-work/facebook-user-works/facebook-user-work.module").then(m => m.FacebookUserWorkModule)
		},
        {
			path: "post-comments",
			loadChildren: () => import("../post/post-comments/post-comment.module").then(m => m.PostCommentModule)
		},
        {
			path: "post-likes",
			loadChildren: () => import("../post/post-likes/post-like.module").then(m => m.PostLikeModule)
		},
        {
			path: "post-medias",
			loadChildren: () => import("../post/post-medias/post-media.module").then(m => m.PostMediaModule)
		},
        {
			path: "post-messages",
			loadChildren: () => import("../post/post-messages/post-message.module").then(m => m.PostMessageModule)
		},
        {
			path: "post-shares",
			loadChildren: () => import("../post/post-shares/post-share.module").then(m => m.PostShareModule)
		},
        {
			path: "v-all-posts",
			loadChildren: () => import("../post/v-all-posts/v-all-post.module").then(m => m.vAllPostModule)
		},
        {
			path: "v-check-comment-users",
			loadChildren: () => import("../post/v-check-comment-users/v-check-comment-user.module").then(m => m.vCheckCommentUserModule)
		},
        {
			path: "v-check-like-users",
			loadChildren: () => import("../post/v-check-like-users/v-check-like-user.module").then(m => m.vCheckLikeUserModule)
		},
        {
			path: "v-check-share-users",
			loadChildren: () => import("../post/v-check-share-users/v-check-share-user.module").then(m => m.vCheckShareUserModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "facebook-user-works",
			loadChildren: () => import("../facebook-user-work/facebook-user-works/facebook-user-work.module").then(m => m.FacebookUserWorkModule)
		},
        {
			path: "post-comments",
			loadChildren: () => import("../post/post-comments/post-comment.module").then(m => m.PostCommentModule)
		},
        {
			path: "post-likes",
			loadChildren: () => import("../post/post-likes/post-like.module").then(m => m.PostLikeModule)
		},
        {
			path: "post-medias",
			loadChildren: () => import("../post/post-medias/post-media.module").then(m => m.PostMediaModule)
		},
        {
			path: "post-messages",
			loadChildren: () => import("../post/post-messages/post-message.module").then(m => m.PostMessageModule)
		},
        {
			path: "post-shares",
			loadChildren: () => import("../post/post-shares/post-share.module").then(m => m.PostShareModule)
		},
        {
			path: "v-all-posts",
			loadChildren: () => import("../post/v-all-posts/v-all-post.module").then(m => m.vAllPostModule)
		},
        {
			path: "v-check-comment-users",
			loadChildren: () => import("../post/v-check-comment-users/v-check-comment-user.module").then(m => m.vCheckCommentUserModule)
		},
        {
			path: "v-check-like-users",
			loadChildren: () => import("../post/v-check-like-users/v-check-like-user.module").then(m => m.vCheckLikeUserModule)
		},
        {
			path: "v-check-share-users",
			loadChildren: () => import("../post/v-check-share-users/v-check-share-user.module").then(m => m.vCheckShareUserModule)
		},
        {
			path: "v-user-profiles",
			loadChildren: () => import("../user-profile-detail/v-user-profiles/v-user-profile.module").then(m => m.vUserProfileModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "facebook-user-works",
			loadChildren: () => import("../facebook-user-work/facebook-user-works/facebook-user-work.module").then(m => m.FacebookUserWorkModule)
		},
        {
			path: "post-comments",
			loadChildren: () => import("../post/post-comments/post-comment.module").then(m => m.PostCommentModule)
		},
        {
			path: "post-likes",
			loadChildren: () => import("../post/post-likes/post-like.module").then(m => m.PostLikeModule)
		},
        {
			path: "post-medias",
			loadChildren: () => import("../post/post-medias/post-media.module").then(m => m.PostMediaModule)
		},
        {
			path: "post-messages",
			loadChildren: () => import("../post/post-messages/post-message.module").then(m => m.PostMessageModule)
		},
        {
			path: "post-shares",
			loadChildren: () => import("../post/post-shares/post-share.module").then(m => m.PostShareModule)
		},
        {
			path: "v-all-posts",
			loadChildren: () => import("../post/v-all-posts/v-all-post.module").then(m => m.vAllPostModule)
		},
        {
			path: "v-check-comment-users",
			loadChildren: () => import("../post/v-check-comment-users/v-check-comment-user.module").then(m => m.vCheckCommentUserModule)
		},
        {
			path: "v-check-like-users",
			loadChildren: () => import("../post/v-check-like-users/v-check-like-user.module").then(m => m.vCheckLikeUserModule)
		},
        {
			path: "v-check-share-users",
			loadChildren: () => import("../post/v-check-share-users/v-check-share-user.module").then(m => m.vCheckShareUserModule)
		},
        {
			path: "v-user-profiles",
			loadChildren: () => import("../user-profile-detail/v-user-profiles/v-user-profile.module").then(m => m.vUserProfileModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../view-online-user/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
//generated code
//])

	]
export const ROUTES: Routes = routings;







console.log(ROUTES)

