"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_domen_service_1 = require("./admin-domen.service");
describe('AdminDomenService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [admin_domen_service_1.AdminDomenService]
        });
    });
    it('should be created', testing_1.inject([admin_domen_service_1.AdminDomenService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-domen.service.spec.js.map