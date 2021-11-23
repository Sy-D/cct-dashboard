import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-general-overview',
  templateUrl: './general-overview.component.html',
  styleUrls: ['./general-overview.component.scss']
})
export class GeneralOverviewComponent implements OnInit {
  quicklinks =  [
    {name: 'Styleguide', imageSrc: '', link: 'styleguide'},
    {name: 'Sitzungsprotokoll', imageSrc: '', link: 'protocol'},
    {name: 'Mitgliederübersicht', imageSrc: '', link: 'members'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route: string) {
    console.log('route click', route);
    this.router.navigate([route]);
  }

}
