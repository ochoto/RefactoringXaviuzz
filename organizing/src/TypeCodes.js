var COMPLEXION_KIND = {
	SKINNY: 	1,
	FATTY: 		0,
	ATHLETIC: 	2,
	MORBID: 	3
};

function HumanMetabolism() {
	this.complexion;

	this.getDailyCalories = function() {
		var calories = 0;
		switch(this.complexion) {
		case 0:
			calories = 1000;
			break;
		case 1:
			calories = 3000;
			break;
		case 2:
			calories = 2000;
			break;
		case 3:
			calories = 500;
			break;
		}
		return calories;
	};

	this.setComplexion = function(aComplexion) {
		this.complexion = aComplexion;
	};
	this.moreMagic = function() {};
	this.needsMoreFood = function() {};

};