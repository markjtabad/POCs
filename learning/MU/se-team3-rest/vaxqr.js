const data = {
    vaccinesdb: [
        {
            "id": '1',
            "vendor": "Pfizer & BioNTech",
            "name": "BNT162b2"
        },
        {
            "id": '2',
            "vendor": "Moderna",
            "name": "mRNA-1273"
        },
        {
            "id": '3',
            "vendor": "Johnson&Johnson's Janssen",
            "name": "JNJ-78436735"
        },
        {
            "id": '4',
            "vendor": "AstraZeneca",
            "name": "AZD1222 Vaxzevria"
        },
        {
            "id": '5',
            "vendor": "Sinopharm",
            "name": "SARS-CoV2 Vaccine (Vero Cell), Inactivated (InCoV)"
        },
        {
            "id": '6',
            "vendor": "Sinovac",
            "name": "SARS-CoV2 Vaccine (Vero Cell), Inactivated / Coronavac"
        },
        {
            "id": '7',
            "vendor": "Gamaleya",
            "name": "Sputnik V"
        },
    ],
    userdb: [
        {
            "id": '1',
            "name": "John Smith",
            "dob": "1988-08-08",
            "address": "Mandaluyong City",
            "access_type": "2",
            "health_status_ok": true,
            "govt_id": "SSS-12345",
        },
        {
            "id": '2',
            "name": "Jane Doe",
            "dob": "1981-08-08",
            "address": "Makati City",
            "access_type": "2",
            "health_status_ok": true,
            "govt_id": "TIN-54321",
        },
        {
            "id": '3',
            "name": "Light",
            "dob": "1981-08-08",
            "address": "Laguna",
            "access_type": "2",
            "health_status_ok": false,
            "govt_id": "Passport-88088",
        },
        {
            "id": '4',
            "name": "Admin Person",
            "dob": "1989-09-09",
            "address": "Taguig",
            "access_type": "3",
            "health_status_ok": true,
            "govt_id": "Passport-00000",
        },
    ],
    useraccessdb: [
        {
            "id": "1",
            "name": "Admin1",
            "roles": "Admin"
        },
        {
            "id": "2",
            "name": "User1",
            "roles": "User"
        },
        {
            "id": "3",
            "name": "User2",
            "roles": "User"
        },
        {
            "id": "4",
            "name": "User3",
            "roles": "User"
        },
    ],
    rolesdb: [
        {
            "id": "1",
            "name": "Government",
        },
        {
            "id": "2",
            "name": "Business Owner",
        },
        {
            "id": "3",
            "name": "User",
        },
    ],
    tracerdb: [
        {
            "id": "1",
            "user_id": "1",
            "merchant_id": "1",
            "date_of_visit": "2021-01-01",
        },
        {
            "id": "2",
            "user_id": "2",
            "merchant_id": "3",
            "date_of_visit": "2021-10-10",
        },
    ],
    merchantdb: [
        {
            "id": "1",
            "name": "Ippudo",
            "address": "Greenbelt, Makati City"
        },
        {
            "id": "2",
            "name": "Powerplant Cinema",
            "address": "Rockwell Drive, Makati City"
        },
    ],
};

export default data;