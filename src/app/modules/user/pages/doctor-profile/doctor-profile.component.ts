import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  activeTab = 'doc_overview';
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab) {
    this.activeTab = tab;
  }
}
