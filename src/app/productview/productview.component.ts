import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
productname=""
productmodel=""
productprice=""

  constructor(private activatedRoute:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.productname=this.activatedRoute.snapshot.params.id;
    if (this.productname=="Samsung") {
      this.productmodel="S10";
      this.productprice="30,000";
      
    }
    if (this.productname=="Lg") {
      this.productmodel="wing";
      this.productprice="25,000";
      
    }
    if (this.productname=="Apple") {
      this.productmodel="X";
      this.productprice="70,000";
      
    }
  }

}
