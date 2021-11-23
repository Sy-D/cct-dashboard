import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { BaseService } from "src/app/shared/core/network/base-service";
import { Project } from "src/app/shared/model/project/project";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class ProjectService extends BaseService {
  override serviceUrl = "projects";

  getAllFromJSON<T>(): Observable<T> {
      return this.http.get<T>('assets/data/project.json').pipe(map((result: T) => {
          return result;
      }));
  }
}
