"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var home_service_1 = require("./home.service");
describe('HomeService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [home_service_1.HomeService]
        });
    });
    it('should be created', testing_1.inject([home_service_1.HomeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=home.service.spec.js.map