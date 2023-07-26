"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_year_service_1 = require("./admin-year.service");
describe('AdminYearService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [admin_year_service_1.AdminYearService]
        });
    });
    it('should be created', testing_1.inject([admin_year_service_1.AdminYearService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-year.service.spec.js.map