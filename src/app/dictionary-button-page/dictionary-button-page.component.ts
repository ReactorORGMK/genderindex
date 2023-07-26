import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary-button-page',
  templateUrl: './dictionary-button-page.component.html',
  styleUrls: ['./dictionary-button-page.component.css']
})
export class DictionaryButtonPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  removeBox(){
		var poimnik = document.getElementById('mypoimnik');
		poimnik.classList.remove("myclass");
		var map = document.getElementById('mymap');
		map.classList.remove("myclass");

	}

	dictionaryName(event, className){
		var i, tabcontent, tablinks;
		tabcontent=document.getElementsByClassName("contentDictionary");
		for(i=0;i<tabcontent.length; i++){
			tabcontent[i].style.overflow="hidden";
			tabcontent[i].style.maxHeight="0px";
			
		/*	tabcontent[i].classList.add('closeDictionary');
			tabcontent[i].classList.remove('openDictionary');*/
		}
		var id=document.getElementById(className);
		id.style.visibility="visible";
		id.style.maxHeight="500px";
		id.style.opacity="1";
		
		
		//id.classList.add('openDictionary');
		//id.classList.remove('closeDictionary');

	}


}
