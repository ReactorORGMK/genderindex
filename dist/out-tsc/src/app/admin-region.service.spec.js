"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_region_service_1 = require("./admin-region.service");
describe('AdminRegionService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [admin_region_service_1.AdminRegionService]
        });
    });
    it('should be created', testing_1.inject([admin_region_service_1.AdminRegionService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-region.service.spec.js.map