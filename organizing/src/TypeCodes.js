HumanMetabolism.COMPLEXION_KIND = {
	SKINNY: 	{calories: 3000},
	FATTY: 		{calories: 1000},
	ATHLETIC: 	{calories: 2000},
	MORBID: 	{calories: 500}
};

function HumanMetabolism() {
	this.complexion;
	this.getDailyCalories = function() {
		return this.complexion.calories;
	};

	this.setComplexion = function(aComplexion) {
		this.complexion = aComplexion;
	};
	this.moreMagic = function() {};
	this.needsMoreFood = function() {};

};