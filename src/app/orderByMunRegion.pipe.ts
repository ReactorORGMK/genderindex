import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'orderByMun'
})
export class OrderByMun implements PipeTransform{
	alphabets = ["А", "Б", "В", "Г", "Д", "Ѓ","Е","Ж","З","Ѕ","И","Ј","К","Л","М","Н","Њ","О","П","Р","С","Т","Ќ","У",
	"Ф","Х","Ц","Ч","Џ","Ш"];


	transform(array: Array<any>, args: string): Array<any> {
		var that=this;
		if (array !== null) {
			/* return array.sort((a,b)=>a.val.name.localeCompare(b.val.name));*/
			array.sort(function (a,b) {
				var aChar;
				var bChar;
				aChar = that.alphabets.indexOf(a.name.toUpperCase().charAt());
				bChar = that.alphabets.indexOf(b.name.toUpperCase().charAt());
				
				if (aChar < bChar){
					return -1;
				} else if (aChar > bChar) {
					return 1;
				} else {
					return 0;
				}
			});
			return array
		}
	}
}