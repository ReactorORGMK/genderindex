import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Routes, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	user:Observable<firebase.User>;

private currentUser: firebase.User;
 
	constructor(private firebaseAuth:AngularFireAuth, private router: Router) {
		this.user=firebaseAuth.authState;
		this.user.subscribe(user=>{
			if(user){
				this.currentUser=user;
				
			}else{
				this.currentUser=null;
				this.router.navigate(['/sign-in']);
			}
		});
	}

	loginUser(email: string, password: string) {
		this.firebaseAuth
		.auth
		.signInWithEmailAndPassword(email, password)
		.then(value => {
			this.router.navigate(['/admin']);
		})
		.catch(err => {
			
			
			alert("Вашата лозинка или е-маил не е точна.")

			console.log('Something went wrong:',err.message);

		});
	}

	logoutUser(){
		this.firebaseAuth.auth.signOut();
		this.router.navigate(['/sign-in']);
	}
	isloggedIn(){
		if(this.currentUser==null){
			return false;
		}else{	
			return true;
		}
		
	}


}
