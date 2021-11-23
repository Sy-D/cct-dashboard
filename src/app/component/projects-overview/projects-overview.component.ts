import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/model/project/project';
import { ProjectService } from 'src/app/shared/service/domain/project/project.service';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  private subscription!: Subscription;
  isLoading = true;
  projects: Project[] = [];
  displayedColumns: string[] = ['client', 'scope', 'duration', 'neededPosition', "deadline"];
  dataSource = new MatTableDataSource<Project>(this.projects);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private projectService: ProjectService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.projectService.getAllFromJSON<Project[]>().subscribe(projects => {
      console.log('project return', projects);
      this.projects = projects;
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
