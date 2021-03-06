import { Component } from '@angular/core';
import { FeedPage } from '../feed/feed.page';
import { IntroPage } from '../intro/intro.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  FeedRoot = FeedPage;
  IntroRoot = IntroPage;
  constructor() {}

}
