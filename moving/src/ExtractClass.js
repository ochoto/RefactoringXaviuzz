function DNI(aDNI) {
	this.DNI='';

	this.setDNI = function(aDNI) {
		this.validateDNI(aDNI);
		this.DNI=aDNI;
	};

	this.validateDNI=function(aDNI){
		var lastCharPosition = aDNI.length - 1;
		var lastDNIChar = aDNI[lastCharPosition];
		var lastDNICharIsLetterA = (lastDNIChar === 'a')
		
		if (lastDNICharIsLetterA) {
			return true;
		}
		
		throw 'bad DNI';
	};

	this.asString = function() {
		return this.DNI;
	};

	this.setDNI(aDNI);
}



function Persona() {
	this.name='';
	this.weight='';
	this.height='';
	this.work='';
	this.bloodType=''
	this.DNI='';

	this.setDNI = function(aDNI) {
		this.DNI = new DNI(aDNI)
	};

	this.getDNI = function() {
		return this.DNI.asString();
	};

	var letters = 'TRWAGMYFPDXBNJZSQVHLCKE'.toLowerCase().split('')
	this.computeLetter = function(aDNI) {
		var dniNum = parseInt(aDNI.asString())
		var letterPos = (dniNum % letters.length)
		var dniLetter = letters[letterPos]
		return dniLetter
	};

	this.gainWeight=function(someKilos){};

	this.looseWeight=function(someKilos){};

	this.changeWork=function(newWork){};
	
	this.validateDNI=function(aDNI){
		return this.DNI.validateDNI(aDNI)
	};
	
	this.newMeasure=function(aHeight){};

}

