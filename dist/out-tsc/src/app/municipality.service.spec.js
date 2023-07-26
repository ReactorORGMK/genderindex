"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var municipality_service_1 = require("./municipality.service");
describe('MunicipalityService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [municipality_service_1.MunicipalityService]
        });
    });
    it('should be created', testing_1.inject([municipality_service_1.MunicipalityService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=municipality.service.spec.js.map