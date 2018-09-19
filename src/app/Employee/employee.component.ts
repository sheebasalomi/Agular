import { Component } from "@angular/core";

@Component({
  selector: "app-my-employee",
  templateUrl: "app/Employee/employee.component.html"
})
export class EmployeeComponent {
  firstName = "Raj";
  lastName = "Krishnan";
  gender = "Male";
  age: Number = 30;
}
