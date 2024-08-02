import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { tableHeaders } from '../../constant/constant';
import { CommonModule, NgFor } from '@angular/common';
import { IMenu } from '../Model/menuGetDto';
import { UserService } from '../../User/user.service';
import { IUser } from '../../User/Model/UserGetDto';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, NgControl, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';



@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent implements OnInit{
  tableHeaders:string[] = tableHeaders;
  menuList:IMenu[] = [];
  userList:IUser[] = [];
  
  menuPermissionForm!:FormGroup;
  //#region dependencyInjection 
  private menuService: MenuService = inject(MenuService);
  private userService: UserService = inject(UserService);
  private fb: FormBuilder = inject(FormBuilder);
  //#endregion

  ngOnInit(): void {
    this.getAllMenus();
    this.getAllUser();
    this.createFormBuilder();
  }
  createFormBuilder(){
      this.menuPermissionForm = this.fb.group({
        userId:[''],
        menus:this.fb.array([])
      })
  }
  get selectionMenu(): FormArray{
    return this.menuPermissionForm.get('selectMenu') as FormArray
  }
  get myMenus(){
    return this.menuPermissionForm.get('menus') as FormArray;
  }
  onCheckboxChange(index: number, isChecked: boolean) {
    this.menus.at(index).setValue(isChecked ? 'y' : 'n');
  }

  onChangeCheckbox(value:number,){
    console.log(value);
    
  }
  
  doChecboxChange(formControl:NgModel){
      console.log(formControl.value);
      
  }
  getAllUser(): void{
      this.userService.getAllUser()
                      .subscribe({
                        next:(result:IUser[])=>
                          this.userList = result,
                        error:(err:string)=>console.log(err)
                      })
  }
  getAllMenus(): void{
    this.menuService.getAllMenu()
    .subscribe({
      next:(result:IMenu[])=>
        this.menuList = result, 
      error:err=>console.log(err)
    });

  }

}
