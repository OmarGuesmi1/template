import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebarback',
  templateUrl: './sidebarback.component.html',
  styleUrls: ['./sidebarback.component.css']
})
export class SidebarbackComponent {
  constructor(private router: Router) {}

  reloadComponent(route: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([route]);
  }
  

}
