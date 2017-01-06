import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: ['.blue-bg{background-color:blue;}']
})
export class AppComponent {
	private currentUser:User = { username: "Test", email: "test@test.com" }
	
	private hideEmail:boolean = true
	
	private toggle() {
		this.hideEmail = !this.hideEmail
	}
	
}

interface User {
	username:string,
	email:string
}
