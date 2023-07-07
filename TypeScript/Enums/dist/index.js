"use strict";
var Planets;
(function (Planets) {
    Planets[Planets["MERCURIO"] = 0] = "MERCURIO";
    Planets[Planets["VENUS"] = 1] = "VENUS";
    Planets[Planets["TERRA"] = 2] = "TERRA";
    Planets[Planets["MARTE"] = 3] = "MARTE";
    Planets[Planets["JUPITER"] = 4] = "JUPITER";
})(Planets || (Planets = {}));
Planets.MERCURIO;
//0
//referenciar valores e facilitar gigibilidade
var Roles;
(function (Roles) {
    Roles["adimin"] = "adimin";
    Roles["user"] = "user";
})(Roles || (Roles = {}));
Roles.adimin;
//"adimin"
