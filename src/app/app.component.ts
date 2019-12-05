import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  host = process.env.COMPONENT_BACKEND_HOST || '0.0.0.0';
  port = process.env.COMPONENT_BACKEND_PORT || 8080;
  title = 'angular-web-app';
  flag =false;
  table:any;
  hideEmployees(){
    document.getElementById("table").innerHTML = '';
    this.flag = false;
}

addEmployee(){
    var empId = (<HTMLInputElement>document.getElementById("empId")).value;
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var age = (<HTMLInputElement>document.getElementById("age")).value;
    if(age=='' || empId=='' || email=='' || name == ""){
        alert("All the field are required");
    }
    else{
    const url_ = "http://"+this.host+":"+this.port+"/api/users/";
		fetch(url_, {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					_id: empId,
                    name: name,
                    email: email,
                    age: age
				})
			}).then(res => res.json())
			.then((res) => {
        (<HTMLInputElement>document.getElementById("empId")).value= "";
        (<HTMLInputElement>document.getElementById("name")).value = "";
      (<HTMLInputElement>document.getElementById("email")).value="";
        (<HTMLInputElement>document.getElementById("age")).value="";
        document.getElementById("close").click();
                alert(res.message);
                
            })
        }
    
}

 viewEmployees(){
    const url_ = "http://"+this.host+":"+this.port+"/api/users/";
		fetch(url_, {
				method: 'GET',
				headers: {
					'content-type': 'application/json'
				}
            })
            .then(res => res.json())
			.then((res) => {
               
               this.table = res.users;
               this.flag = true;
                
            })
    
}

 deleteEmployee(id:any){
    const url_ = "http://"+this.host+":"+this.port+"/api/users/";
		fetch(url_, {
				method: 'DELETE',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					_id: id                   
				})
            })
            .then(res => res.json())
			.then((res) => {
                alert(res.message);
                this.viewEmployees();
                
            })
}

retrieveEmployee(id:any){
    
  console.log(id);
    const url_ = "http://"+this.host+":"+this.port+"/api/users/";
    console.log(url_)
		fetch(url_, {
				method: 'GET',
				headers: {
					'content-type': 'application/json'
				}
            })
            .then(res => res.json())
			.then((res) => {
        console.log(res);
        (<HTMLInputElement>document.getElementById("empId1")).readOnly = true;
        (<HTMLInputElement>document.getElementById("empId1")).value= res.users[0]._id;
        (<HTMLInputElement>document.getElementById("name1")).value = res.users[0].name;
        (<HTMLInputElement>document.getElementById("email1")).value= res.users[0].email;
        (<HTMLInputElement>document.getElementById("age1")).value= res.users[0].age;  
                document.getElementById('btn1').click();
            })

}

updateEmployee(){
    var empId = (<HTMLInputElement>document.getElementById("empId1")).value;
    var name = (<HTMLInputElement>document.getElementById("name1")).value;
    var email = (<HTMLInputElement>document.getElementById("email1")).value;
    var age = (<HTMLInputElement>document.getElementById("age1")).value;
    if(age=='' || empId=='' || email=='' || name == ""){
        alert("All the field are required");
    }
    else{
    const url_ = "http://"+this.host+":"+this.port+"/api/users/";
		fetch(url_, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					_id: empId,
                    name: name,
                    email: email,
                    age: age
				})
			}).then(res => res.json())
			.then((res) => {
                document.getElementById("close1").click();
                alert(res.message);
                this.viewEmployees();
            })
        }
    
}
}
