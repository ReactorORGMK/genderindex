"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_municipality_service_1 = require("./admin-municipality.service");
describe('AdminMunicipalityService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [admin_municipality_service_1.AdminMunicipalityService]
        });
    });
    it('should be created', testing_1.inject([admin_municipality_service_1.AdminMunicipalityService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-municipality.service.spec.js.map