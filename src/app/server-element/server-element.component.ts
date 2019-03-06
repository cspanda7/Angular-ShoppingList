import { Component, OnInit,Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges {
@Input() element:{type:string,name:string,content:string};
  constructor() { }

  ngOnInit(){
    console.log('Init called..');
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('changes called..');
    console.log(changes);
  }
}
