"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_els_municipality_service_1 = require("./admin-els-municipality.service");
describe('AdminElsMunicipalityService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [admin_els_municipality_service_1.AdminElsMunicipalityService]
        });
    });
    it('should be created', testing_1.inject([admin_els_municipality_service_1.AdminElsMunicipalityService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-els-municipality.service.spec.js.map