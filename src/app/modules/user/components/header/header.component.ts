import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  drawer: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('.main-nav a').on('click', function (e) {
      if ($(this).parent().hasClass('has-submenu')) {
        e.preventDefault();
      }
      if (!$(this).hasClass('submenu')) {
        $('ul', $(this).parents('ul:first')).slideUp(350);
        $('a', $(this).parents('ul:first')).removeClass('submenu');
        $(this).next('ul').slideDown(350);
        $(this).addClass('submenu');
      } else if ($(this).hasClass('submenu')) {
        $(this).removeClass('submenu');
        $(this).next('ul').slideUp(350);
      }
    });
  }

  drawerToggle() {
    this.drawer = this.drawer ? false : true;
  }

}
