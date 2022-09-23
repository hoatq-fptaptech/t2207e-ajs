import {Component} from "@angular/core";
import {IFoodMenu, IMenu} from "../interfaces/foodmenu.interface";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html'
})
export class FoodComponent{
  data: IMenu[] = [];

  // tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {
  }

  ngOnInit(){ // ham nay tu dong chay khi print giao dien ra
     const url = 'https://foodgroup.herokuapp.com/api/menu';
     this.http.get<IFoodMenu>(url).subscribe(data=>{
        this.data = data.data;
     });
  }

}
