/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message } from '../services/data.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';


@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message: Message;

  messageBody='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private socialSharing: SocialSharing
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.message = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? '' : '';
  }


  shareData(messageInfo){
    this.socialSharing.share(this.messageBody, messageInfo.subject, null, 'https://www.youtube.com/watch?v=zzaIGC-MouU');
  }
}
