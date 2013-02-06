describe("Persona", function() {

  var persona;
  var dni;

  beforeEach(function() {
    persona = new Persona();
    dni = new DNI('29172168a');
  });

  it(" has dni", function() {
    expect(function(){persona.setDNI('29172168a');}).not.toThrow();
    expect(function(){persona.setDNI('29172168b');}).toThrow();
    expect(persona.getDNI()).toEqual('29172168a');
  });

  it(" computes dni letters", function() {
    expect(persona.computeLetter(dni)).toEqual('a');
  });
 
});