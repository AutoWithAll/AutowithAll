import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


export interface PeriodicElement {
  adnumber: number;
  title: string;
  imageUrl: string;
  postdate: string;
  validdate: string;
  price: string;
  
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {adnumber: 1, title: 'Toyota Duet',imageUrl:'assets/img/car.jpg', postdate:'2018/01/01' ,validdate:'2018/01/01' , price: "1 000 000"},
  {adnumber: 2, title: 'Tata Nano',imageUrl:'assets/img/car2.jpg', postdate:'2020/03/04' ,validdate:'2020/03/04' , price: "1 300 000"},
  {adnumber: 3, title: 'BMW A4',imageUrl:'assets/img/car3.jpg', postdate:'2020/01/06' ,validdate:'2020/03/04' , price: "1 500 000"},
  {adnumber: 4, title: 'Honda Grace',imageUrl:'assets/img/car.jpg', postdate:'2020/04/03' ,validdate:'2020/03/04' , price: "1 800 000"},
  {adnumber: 5, title: 'Micro Panda',imageUrl:'assets/img/car2.jpg', postdate:'2020/05/06' ,validdate:'2020/03/04' , price: "1 000 000"},
  {adnumber: 6, title: 'Toyota Prius',imageUrl:'assets/img/car3.jpg', postdate:'2020/07/01' ,validdate:'2020/03/04' , price: "1 00 000"},
  {adnumber: 7, title: 'Nissan Sunny',imageUrl:'assets/img/car2.jpg', postdate:'2020/04/01' ,validdate:'2020/03/04' , price: "1 000 000"}
  
 
];

@Component({
  selector: 'app-viewads',
  templateUrl: './viewadsn.component.html',
  styleUrls: ['./viewadsn.component.css']
})
export class SellerViewadsComponent implements OnInit {

  displayedColumns: string[] = ['adnumber', 'title', 'imageUrl','postdate','validdate', 'price','actions','update','delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }
  openDialog() {
     this.dialog.open(DeleteAdNormalDialog);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
  

}
@Component({
  selector: 'nsellerdeletead-dialog',
  templateUrl: 'nsellerdeletead-dialog.html',
})
export class DeleteAdNormalDialog {}