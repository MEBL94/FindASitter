import { InMemoryDbService } from "angular-in-memory-web-api";

export class FakeBackendService implements InMemoryDbService {

    createDb() {
        let sitters = [
            {
                id: 1,
                username: "azat",
                password: "secret",
                name: "Azat Baran",
                gender: "male",
                birthDate: new Date(1995, 2, 16),
                noCriminalRecord: true,
                noChildRecord: true,
                hourlyWage: 1337,
                address: "some",
                zipCode: "2600",
                city: "Glostrup"
            },
            {
                id: 2,
                username: "mathias",
                password: "secret",
                name: "Mathias Baran",
                gender: "male",
                birthDate: new Date(1994, 2, 16),
                noCriminalRecord: true,
                noChildRecord: true,
                hourlyWage: 5000,
                address: "some",
                zipCode: "2670",
                city: "Greve"
            }
        ];
        return {
            sitters: sitters
        }
    }
}