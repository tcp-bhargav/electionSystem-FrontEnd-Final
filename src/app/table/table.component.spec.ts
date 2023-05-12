import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TableData {
  // Define the interface for your table data here
  
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableData: TableData[] = [];


  // tableData: TableData[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<TableData[]>('/api/endpoint').subscribe(data => {
      this.tableData = data;
    });
  }

}
