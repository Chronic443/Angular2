import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: ['.blue-bg{background-color:blue;}']
})
export class AppComponent {
	private currentUser:User = { username: "Test", email: "test@test.com" }
	
	private hideEmail:boolean = true
	
	private disabledInput:boolean = false
	
	private isDisabled():boolean {
		return this.disabledInput
	}
	
	private isBlueBg:boolean = true
	private bgColor:string = 'red'
	
}

interface User {
	username:string,
	email:string
}
