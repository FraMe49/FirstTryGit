var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Media = (function () {
    function Media(title, author, genre, publisher, imgSrc, rating) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.imgSrc = imgSrc;
        this.rating = rating;
    }
    Media.prototype.render = function () {
        var writeOut = '<li>' + 'Title :   ' + this.title + '</li>';
        writeOut += '<li>' + 'Author :  ' + this.author + '</li>';
        writeOut += '<li>' + 'Genre :  ' + this.genre + '</li>';
        writeOut += '<li>' + 'Publisher :  ' + this.publisher + '</li>';
        writeOut += '<li>' + 'Rating :  ' + this.rating + ' Stars' + '</li>';
        return writeOut;
    };
    Media.prototype.getImgSrc = function () {
        return this.imgSrc;
    };
    Media.prototype.getTitle = function () {
        return this.title;
    };
    return Media;
}());
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(title, author, genre, publisher, imgSrc, rating) {
        return _super.call(this, title, author, genre, publisher, imgSrc, rating) || this;
    }
    Book.prototype.render = function () {
        var writeOut = "<div class=\"row bookStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Book;
}(Media));
var DVD = (function (_super) {
    __extends(DVD, _super);
    function DVD(title, author, genre, publisher, imgSrc, rating) {
        return _super.call(this, title, author, genre, publisher, imgSrc, rating) || this;
    }
    DVD.prototype.render = function () {
        var writeOut = "<div class=\"row dvdStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return DVD;
}(Media));
var CD = (function (_super) {
    __extends(CD, _super);
    function CD(title, author, genre, publisher, imgSrc, rating) {
        return _super.call(this, title, author, genre, publisher, imgSrc, rating) || this;
    }
    CD.prototype.render = function () {
        var writeOut = "<div class=\"row cdStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return CD;
}(Media));
var Comic = (function (_super) {
    __extends(Comic, _super);
    function Comic(title, author, genre, publisher, imgSrc, rating) {
        return _super.call(this, title, author, genre, publisher, imgSrc, rating) || this;
    }
    Comic.prototype.render = function () {
        var writeOut = "<div class=\"row comicStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Comic;
}(Media));
var Render = (function () {
    function Render(testArray) {
        this.mediaArray = testArray;
        this.mediaCounterMap = new Map();
    }
    Render.prototype.showArray = function () {
        console.log(this.mediaArray);
    };
    Render.prototype.renderAll = function () {
        for (var i = 0; i < this.mediaArray.length; i++) {
            document.getElementById('mediaList').innerHTML += this.mediaArray[i].render();
        }
    };
    Render.prototype.countTypeOfMedia = function () {
        this.mediaCounterMap.set('Books', 0);
        this.mediaCounterMap.set('DVDs', 0);
        this.mediaCounterMap.set('CDs', 0);
        this.mediaCounterMap.set('Comics', 0);
        for (var i = 0; i < this.mediaArray.length; i++) {
            if (this.mediaArray[i] instanceof Book) {
                var val = this.mediaCounterMap.get('Books') + 1;
                this.mediaCounterMap.set('Books', val);
            }
            if (this.mediaArray[i] instanceof DVD) {
                var val = this.mediaCounterMap.get('DVDs') + 1;
                this.mediaCounterMap.set('DVDs', val);
            }
            if (this.mediaArray[i] instanceof CD) {
                var val = this.mediaCounterMap.get('CDs') + 1;
                this.mediaCounterMap.set('CDs', val);
            }
            if (this.mediaArray[i] instanceof Comic) {
                var val = this.mediaCounterMap.get('Comics') + 1;
                this.mediaCounterMap.set('Comics', val);
            }
        }
        console.log(this.mediaCounterMap);
    };
    return Render;
}());
