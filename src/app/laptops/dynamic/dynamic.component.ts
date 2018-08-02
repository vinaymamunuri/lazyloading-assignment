import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  subscribeddemo: any;
  id: any;
  laptops: any;
  laptop:any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.laptops = [{
      id: 1,
      name: 'acer',
      price: 25000
    },
    {
      id: 2,
      name: 'dell',
      price: 30000
    },
    {
      id: 3,
      name: 'lenovo',
      price: 35000
    }]

    this.subscribeddemo = this.route.params.subscribe(
      (params) => {
        return this.id = params['id']
      }
    )
    this.displaylaptopsdetails();
    console.log(this.id);

  }

  displaylaptopsdetails() {
    this.laptops.forEach(laptop => {
      if (laptop.id == this.id) {
        this.laptop = laptop;
      }

    });

  }
  ngOnDestroy() {
    this.subscribeddemo.unsubscribe();

  }


}
