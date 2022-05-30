import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TicketTableDataSource, TicketTableItem } from './demo.datasource';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo.component.html',
  styleUrls: ['.demo.component.css']
})
export class DemoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TicketTableItem>;
  dataSource: TicketTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['status','createdBy','description', 'createdAt'];

  constructor() {
    this.dataSource = new TicketTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
