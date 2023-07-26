import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
@Output() languageEmit = new EventEmitter<string>();



isIn = false;   // store state
    
  constructor(private translate: TranslateService) {
       

    }

  async ngOnInit() {
  await this.translate.get('dummyTranslation').toPromise().then();

  this.translate.setDefaultLang('mk');
       this.translate.setDefaultLang(localStorage.getItem('language'));
    this.translate.use(localStorage.getItem('language'));


    this.translate.setDefaultLang('mk');
    this.translate.addLangs(['mk', 'en']);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem("language",lang);
    
     this.languageEmit.emit(lang);
    
  }





  toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

}
