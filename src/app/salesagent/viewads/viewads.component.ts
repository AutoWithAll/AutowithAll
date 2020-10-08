import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../service/user.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Ad, AdDetails } from 'src/app/models/ad.model';
import { MatSort } from '@angular/material/sort';

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

@Component({
  selector: 'app-viewads',
  templateUrl: './viewads.component.html',
  styleUrls: ['./viewads.component.css'],
})
export class ViewadsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'image1',
    'datetime',
    'validdate',
    'price',
    'actions',
    'delete',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();

  adDetail : AdDetails = <AdDetails>{};

  @ViewChild(MatSort) sort: MatSort;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private adService: UserService) {}
  openDialog() {
    this.dialog.open(DeleteAdDialog);
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
  selector: 'agentdeletead-dialog',
  templateUrl: 'agentdeletead-dialog.html',
})
export class DeleteAdDialog {}
