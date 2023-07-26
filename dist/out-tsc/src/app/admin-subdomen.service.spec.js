"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_subdomen_service_1 = require("./admin-subdomen.service");
describe('AdminSubdomenService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [admin_subdomen_service_1.AdminSubdomenService]
        });
    });
    it('should be created', testing_1.inject([admin_subdomen_service_1.AdminSubdomenService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-subdomen.service.spec.js.map