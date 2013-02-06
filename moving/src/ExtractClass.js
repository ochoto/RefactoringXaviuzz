function DNI(aDNI) {
	this.DNI='';

	this.setDNI = function(aDNI) {
		if(this.validateDNI(aDNI)){
			this.DNI=aDNI;
		}else{
			throw 'bad DNI';
		}
	};

	this.validateDNI=function(aDNI){
		return aDNI[aDNI.length -1]==='a';
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

	this.gainWeight=function(someKilos){};

	this.looseWeight=function(someKilos){};

	this.changeWork=function(newWork){};
	
	this.validateDNI=function(aDNI){
		return aDNI[aDNI.length -1]==='a';
	};
	
	this.newMeasure=function(aHeight){};

}