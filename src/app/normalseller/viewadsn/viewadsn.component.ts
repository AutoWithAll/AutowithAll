import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdDetails } from 'src/app/models/ad.model';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/service/user.service';


export interface PeriodicElement {
  id: number;
  title: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  datetime: string;
  validdate: string;
  price: string;
  colour: string;
  description: string;
  e_capacity: string;
  fuel_type: string;
  location: string;
  m_year: string;
  manufacturer: string;
  mileage: string;
  model: string;
  name: string;
  transmission: string;
  v_condition: string;
  v_type: string;
  }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {adnumber: 1, title: 'Toyota Duet',imageUrl:'assets/img/car.jpg', postdate:'2018/01/01' ,validdate:'2018/01/01' , price: "1 000 000"},
//   {adnumber: 2, title: 'Tata Nano',imageUrl:'assets/img/car2.jpg', postdate:'2020/03/04' ,validdate:'2020/03/04' , price: "1 300 000"},
//   {adnumber: 3, title: 'BMW A4',imageUrl:'assets/img/car3.jpg', postdate:'2020/01/06' ,validdate:'2020/03/04' , price: "1 500 000"},
//   {adnumber: 4, title: 'Honda Grace',imageUrl:'assets/img/car.jpg', postdate:'2020/04/03' ,validdate:'2020/03/04' , price: "1 800 000"},
//   {adnumber: 5, title: 'Micro Panda',imageUrl:'assets/img/car2.jpg', postdate:'2020/05/06' ,validdate:'2020/03/04' , price: "1 000 000"},
//   {adnumber: 6, title: 'Toyota Prius',imageUrl:'assets/img/car3.jpg', postdate:'2020/07/01' ,validdate:'2020/03/04' , price: "1 00 000"},
//   {adnumber: 7, title: 'Nissan Sunny',imageUrl:'assets/img/car2.jpg', postdate:'2020/04/01' ,validdate:'2020/03/04' , price: "1 000 000"}
  
 
// ];

@Component({
  selector: 'app-viewads',
  templateUrl: './viewadsn.component.html',
  styleUrls: ['./viewadsn.component.css']
})
export class SellerViewadsComponent implements OnInit {

  displayedColumns: string[] = [  
  'adnumber',
  'title',
  'imageUrl',
  'postdate',
  'validdate',
  'price',
  'actions',
  'delete',];
  dataSource = new MatTableDataSource<PeriodicElement>();
  adDetail : AdDetails = <AdDetails>{};
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private adService: UserService) { }
  openDialog() {
     this.dialog.open(DeleteAdNormalDialog);
  }
  onDelete(id){
    
  }

  ngOnInit(): void {
    this.getAdds();

  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAdds() {
    this.adService.getAddsByUser().subscribe((res) => {
      this.dataSource.data = res as PeriodicElement[];
    });
  }
  viewAd(id){
    console.log(id)
    this.adService.getOneAd(id).subscribe(res => {
      this.adDetail = res;
      console.log(this.adDetail)
    })
  }
  
  

}
@Component({
  selector: 'nsellerdeletead-dialog',
  templateUrl: 'nsellerdeletead-dialog.html',
})
export class DeleteAdNormalDialog {}