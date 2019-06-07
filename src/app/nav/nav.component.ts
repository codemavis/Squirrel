import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#navbarNavDropdown .navbar-nav a').on('click', function () {
      $('#navbarNavDropdown .navbar-nav').find('li.active').removeClass('active');
      $(this).parent('li').addClass('active');
    });
  }

  

}
