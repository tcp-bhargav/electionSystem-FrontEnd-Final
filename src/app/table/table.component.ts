import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData: any[] = [];
  headers: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTableData();
    setInterval(() => {
      this.getTableData();
    }, 60000);  // fetch new data every 60 seconds
  }

  getTableData(): void {
    const apiUrl = 'https://randomuser.me/api/?results=15';
    this.http.get(apiUrl).subscribe((response: any) => {
      this.tableData = response.results;
      this.headers = ['Title', 'First Name', 'Last Name', 'Gender', 'Street Name', 'Street Number', 'City', 'State', 'Country', 'Postcode', 'Username', 'Password', 'Date of Birth', 'Registration Date'];
    });
  }

}
