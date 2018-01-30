import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

//import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
//import { SpeakerListPage } from '../speaker-list/speaker-list';
//import { TeamListPage } from '../team-list/team-list';
import { QuestionAnswerPage } from '../question-answer/question-answer';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = MapPage;
  tab3Root: any = QuestionAnswerPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
