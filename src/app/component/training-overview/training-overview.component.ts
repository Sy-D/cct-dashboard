import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Training } from 'src/app/shared/model/training/training';
import { TrainingService } from 'src/app/shared/service/domain/training/training.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-training-overview',
  templateUrl: './training-overview.component.html',
  styleUrls: ['./training-overview.component.scss'],
})
export class TrainingOverviewComponent implements OnInit {
  private subscription!: Subscription;
  isLoading = true;
  trainings: Training[] = [];
  displayedColumns: string[] = ['name', 'trainer', 'level', 'time', "location"];
  dataSource = new MatTableDataSource<Training>(this.trainings);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private traningService: TrainingService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.traningService.getAllFromJSON<Training[]>().subscribe(trainings => {
      this.trainings = trainings;
      console.log('ttrain ', this.trainings);
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
