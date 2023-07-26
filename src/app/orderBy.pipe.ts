import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'orderByName'
})
export class OrderBy implements PipeTransform{
	alphabets = ["А", "Б", "В", "Г", "Д", "Ѓ","Е","Ж","З","Ѕ","И","Ј","К","Л","М","Н","Њ","О","П","Р","С","Т","Ќ","У",
	"Ф","Х","Ц","Ч","Џ","Ш"];


	transform(array: Array<any>, args: string):Array<any> {
		var that=this;
		if (array!=undefined || array!=null) {
			array.sort(function (a, b) {
				return that.compareChar(a.val.name,b.val.name,0);
			});
			return array;
		}
	}
	compareChar(a,b,index){
		var that=this;				
		var aChar = that.alphabets.indexOf(a.toUpperCase().charAt(index));
		var bChar = that.alphabets.indexOf(b.toUpperCase().charAt(index));
		if(aChar!=bChar){
			if (aChar < bChar){
				return -1;
			} else if (aChar > bChar) {
				return 1;
			} else {
				return 0;
			}
		}else{
			return this.compareChar(a, b, index + 1);
		}
	}

}