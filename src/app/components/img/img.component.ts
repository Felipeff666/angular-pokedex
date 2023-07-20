import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {

  @Input() imgUrl:string='';
  @Input() imgStyles:object={};
  @Input() imgDefault:string='';

  imgNoLoaded(){

    if(this.imgDefault){
      this.imgUrl=this.imgDefault;
    }else{
      this.imgUrl='https://t4.ftcdn.net/jpg/03/01/37/81/360_F_301378170_aNwTE4Jy0fW6KOa7HEmi84cEaWX7hrS8.png';
    }

  }
  imgNoLoadedDefault(){
    this.imgUrl='https://t4.ftcdn.net/jpg/03/01/37/81/360_F_301378170_aNwTE4Jy0fW6KOa7HEmi84cEaWX7hrS8.png';
  }
}
