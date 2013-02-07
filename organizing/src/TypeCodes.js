HumanMetabolism.COMPLEXION_KIND = {
	SKINNY: 	{ getCalories: function() { return 3000 } },
	FATTY: 		{ getCalories: function() { return 1000 } },
	ATHLETIC: 	{ getCalories: function() { return 2000 } },
	MORBID: 	{ getCalories: function() { return  500 } }
};

function HumanMetabolism() {
	this.complexion;
	this.getDailyCalories = function() {
		return this.complexion.getCalories();
	};

	this.setComplexion = function(aComplexion) {
		this.complexion = aComplexion;
	};
	this.moreMagic = function() {};
	this.needsMoreFood = function() {};

};