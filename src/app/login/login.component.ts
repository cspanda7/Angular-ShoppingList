import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Secondary' },
      { item_id: 2, item_text: 'Graduate' },
      { item_id: 3, item_text: 'Post Graduate' },
      { item_id: 4, item_text: 'M.Phil.' },
      { item_id: 5, item_text: 'Ph.D.' },
      { item_id: 6, item_text: 'Diploma' },
      { item_id: 7, item_text: 'Others' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Post Graduate' },
      { item_id: 4, item_text: 'M.Phil.' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
