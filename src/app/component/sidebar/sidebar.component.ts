import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems = [ { name: 'Übersicht', icon: 'home', link: 'overview'
  },
  { name: 'Persönliche Übersicht', aria: 'Persönliche Übersicht', icon: 'account_circle', link: 'user-overview'
  },
  { name: 'Styleguide', aria: 'Styleguide', icon: 'brush', link: 'styleguide'
  },
  { name: 'Sitzungsprotokoll', aria: 'Sitzungsprotokoll', icon: 'desktop_windows', link: 'protocol'
  },
  { name: 'Mitgliederübersicht', aria: 'Mitgliederübersicht', icon: 'eople_outline', link: 'members'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
