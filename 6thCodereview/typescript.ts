abstract class Media{
	title:string;
	author:string;
	genre:string;
	publisher:string;
	imgSrc:string;
	rating:number;
	constructor(title:string,author:string,genre:string,publisher:string,imgSrc:string,rating:number){
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.publisher = publisher;
		this.imgSrc = imgSrc;
		this.rating = rating;
	}
	render():string{
		let writeOut:string = '<li>' + 'Title :   ' + this.title + '</li>';
          writeOut += '<li>' + 'Author :  ' + this.author + '</li>';
          writeOut += '<li>' + 'Genre :  ' + this.genre + '</li>';
          writeOut += '<li>' + 'Publisher :  ' + this.publisher + '</li>';
          
          writeOut += '<li>' + 'Rating :  ' + this.rating + ' Stars' + '</li>';
          return writeOut;
	}
		getImgSrc():string{
		return this.imgSrc;
	}
		getTitle():string{
			return this.title;
		}
}

	class Book extends Media{
		constructor(title:string,author:string,genre:string,publisher:string,imgSrc:string,rating:number){
			super(title,author,genre,publisher,imgSrc,rating);
		}
		render():string{
			let writeOut:string = "<div class=\"row bookStyle\">";
			writeOut += "<div class=\"col-lg-6\">";
			writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
			writeOut += "</div>";
			writeOut += "<div class=\"col-lg-6 carStyle\">";
			writeOut += '<h1>' + super.getTitle() + '</h1>';
			 writeOut += '<ul>';
			 	writeOut += super.render();
			 writeOut += '</ul>';
			writeOut += "</div>";
		writeOut += "</div>";
    return writeOut;

	}
}

class DVD extends Media{
		constructor(title:string,author:string,genre:string,publisher:string,imgSrc:string,rating:number){
			super(title,author,genre,publisher,imgSrc,rating);
		}
		render():string{
			let writeOut:string = "<div class=\"row dvdStyle\">";
			writeOut += "<div class=\"col-lg-6\">";
			writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
			writeOut += "</div>";
			writeOut += "<div class=\"col-lg-6 carStyle\">";
			writeOut += '<h1>' + super.getTitle() + '</h1>';
			 writeOut += '<ul>';
			 	writeOut += super.render();
			 writeOut += '</ul>';
			writeOut += "</div>";
		writeOut += "</div>";
    return writeOut;

	}
}

class CD extends Media{
		constructor(title:string,author:string,genre:string,publisher:string,imgSrc:string,rating:number){
			super(title,author,genre,publisher,imgSrc,rating);
		}
		render():string{
			let writeOut:string = "<div class=\"row cdStyle\">";
			writeOut += "<div class=\"col-lg-6\">";
			writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
			writeOut += "</div>";
			writeOut += "<div class=\"col-lg-6 carStyle\">";
			writeOut += '<h1>' + super.getTitle() + '</h1>';
			 writeOut += '<ul>';
			 	writeOut += super.render();
			 writeOut += '</ul>';
			writeOut += "</div>";
		writeOut += "</div>";
    return writeOut;

	}
}
class Comic extends Media{
		constructor(title:string,author:string,genre:string,publisher:string,imgSrc:string,rating:number){
			super(title,author,genre,publisher,imgSrc,rating);
		}
		render():string{
			let writeOut:string = "<div class=\"row comicStyle\">";
			writeOut += "<div class=\"col-lg-6\">";
			writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
			writeOut += "</div>";
			writeOut += "<div class=\"col-lg-6 carStyle\">";
			writeOut += '<h1>' + super.getTitle() + '</h1>';
			 writeOut += '<ul>';
			 	writeOut += super.render();
			 writeOut += '</ul>';
			writeOut += "</div>";
		writeOut += "</div>";
    return writeOut;

	}
}

class Render{
	mediaArray:Array<Media>;
	firstBookMedia:Media;
	secondBookMedia:Media;
	firstDVDMedia:Media;
	secondDVDMedia:Media;
	firstCDMedia:Media;
	secondCDMedia:Media;
	firstComicMedia:Media;
	secondComicMedia:Media;
	newMedia:Media;
	mediaCounterMap:Map<String,number>;
	constructor(testArray:Array<Media>){
		this.mediaArray = testArray;
		this.mediaCounterMap = new Map<String,number>();
		}
	showArray(){
		console.log(this.mediaArray);
	}
	renderAll(){
		for(let i=0;i<this.mediaArray.length;i++){
			document.getElementById('mediaList').innerHTML += this.mediaArray[i].render();
		}
	}
	countTypeOfMedia(){
		this.mediaCounterMap.set('Books',0);
		this.mediaCounterMap.set('DVDs',0);
		this.mediaCounterMap.set('CDs',0);
		this.mediaCounterMap.set('Comics',0);
		for(let i=0;i<this.mediaArray.length;i++){
			if(this.mediaArray[i] instanceof Book){
				let val:number =this.mediaCounterMap.get('Books')+1;
				this.mediaCounterMap.set('Books',val);
			}
			if(this.mediaArray[i] instanceof DVD){
				let val:number =this.mediaCounterMap.get('DVDs')+1;
				this.mediaCounterMap.set('DVDs',val);
		}
			if(this.mediaArray[i] instanceof CD){
				let val:number =this.mediaCounterMap.get('CDs')+1;
				this.mediaCounterMap.set('CDs',val);
		}
			if(this.mediaArray[i] instanceof Comic){
				let val:number =this.mediaCounterMap.get('Comics')+1;
				this.mediaCounterMap.set('Comics',val);
		}
	}
	console.log(this.mediaCounterMap);
}
}








