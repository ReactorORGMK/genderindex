import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
	selector: 'app-dictionary-page',
	templateUrl: './dictionary-page.component.html',
	styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
	idIndicator;
	constructor(public route:ActivatedRoute,private translate: TranslateService) {

		var that=this;
		this.route.paramMap.subscribe(id=>{
			this.idIndicator=id.get('indicator');
		});


	}

	ngOnInit() {
		var id=document.getElementById(this.idIndicator);
		//id.style.visibility="visible";
		//id.style.maxHeight="200px";
		//id.classList.add('openDictionary');
		//id.classList.remove('closeDictionary');
		//var openOnClick = document.getElementById('open_'+this.idIndicator);
		//openOnClick.scrollIntoView();
		
		
	}


	
	dictionaryName(event, className){
		var i, tabcontent;
		tabcontent=document.getElementsByClassName("contentDictionary");
		for(i=0;i<tabcontent.length; i++){
			tabcontent[i].style.overflow="hidden";
			tabcontent[i].style.maxHeight="0px";
		}
		var id=document.getElementById(className);
		id.style.visibility="visible";
		id.style.maxHeight="500px";
		id.style.opacity="1";
		
		

	}

}
