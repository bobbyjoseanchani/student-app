import { Component, OnInit, Input } from '@angular/core';
import { NavContentComponent } from '../nav-content/nav-content.component';
import { MAINNAVITEMS, NavItem } from './nav-items';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() navOpen:Boolean;
  public selectedNavItem: NavItem;
  constructor() { }

  navItems = MAINNAVITEMS;

  ngOnInit() {
    this.selectedNavItem = MAINNAVITEMS[0];
  }

  public selectNavItem(navItem: NavItem){
    this.selectedNavItem = navItem;
  }

}
