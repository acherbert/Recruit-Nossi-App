import { Component } from '@angular/core';
import { Routes, RouterModule, Router} from '@angular/router'
import { WordpressService  } from '../providers/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  categories: any;

  constructor(public router: Router, public wp: WordpressService){
    this.retrieveCategories();

  }
  // ionViewDidLoad(){
  //   this.wp.retrieveCategories().subscribe(results => {
  //     this.categories = results.json;
      
  //   });
  // }
  retrieveCategories(){
    this.wp.retrieveCategories().subscribe(results => {
      this.categories = results.json();
      
     
    });
  }
loadCategory(id: number){
  this.router.navigate(['/category-list'],{
    queryParams: {categoryID: id}

    });
  }
 
}
