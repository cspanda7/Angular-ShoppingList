import { Component ,OnInit,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  {
   serverElements=[{
     type:'server',
     name:'Test server',
     content:'Content'
    }]; 
    loadedFeature:string='recipe'; 
    constructor(){
      console.log('constructor called..');
    }
    onNavigate(feature:string){
      this.loadedFeature=feature;
    }
   
    onServerAdded(serverData:{serverName:string,serverContent:string}){
      this.serverElements.push({
        type:'server',
        name:serverData.serverName,
        content:serverData.serverContent
      });
    }
      onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
        this.serverElements.push({
          type:'blueprint',
          name:blueprintData.serverName,
          content:blueprintData.serverContent
        });
    }
}     