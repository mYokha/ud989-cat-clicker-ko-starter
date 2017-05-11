//View Model  
var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		nicknames: ['Tiger', 'Hero', 'Key']
	},
	{
		clickCount: 0,
		name: 'Tiger',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		nicknames: ['Tigger', 'Trigger']
	},
	{
		clickCount: 0,
		name: 'Scaredy',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		nicknames: ['Casper']
	},
	{
		clickCount: 0,
		name: 'Shadow',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		nicknames: ['Bobby', 'Robert']
	},
	{
		clickCount: 0,
		name: 'Sleepy',
		imgSrc: 'img/9648464288_2516b35537_z.jpg',
		nicknames: ['Zzzzzz']
	}
];

var ViewModel = function () {
	var self = this;
	
	this.catList = ko.observableArray();
	
	initialCats.forEach(function (catItem) {
		self.catList.push(new Cat(catItem));
	});
	
	this.currentCat = ko.observable(this.catList()[0]);
	
	this.changeCat = function(cat){
		self.currentCat(cat);
	}

	this.incrementCounter = function () {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
		
	};
};
/*
We need to make cats in a cat list clickable.
When you click on the cat in the list it should change currentCat observable to the new clicked cat.
That means we need to make a function for setting a new current cat
*/
var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames =  ko.observableArray(data.nicknames);
	
	this.title = ko.computed(function(){
			var title;
			var count = this.clickCount();

			switch (true) {
			  case count < 10:
				title = 'New born';
				break;
			  case count < 50:
				title = 'Infant';
				break;
			  case  count < 100:
				title = 'Child';
				break;
			case count < 200:
				title = 'Adult';
				break;
			  default:
				title = 'Ninja';
			};

			return title;
		}, this);
}

ko.applyBindings(new ViewModel());