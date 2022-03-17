const express = require('express');
const app = express();

const { faker } = require('@faker-js/faker');

class User {
   constructor() {
      this._id = faker.datatype.uuid();
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
   }
}

class Company {
   constructor() {
      this._id = faker.datatype.uuid();
      this.name = faker.company.companyName();
      this.address = {
         street: faker.address.streetAddress(),
         city: faker.address.city(),
         state: faker.address.stateAbbr(),
         zipCode: faker.address.zipCodeByState(),
         country: faker.address.country()
      }
   }
}

app.get("/", (req, res) => {
   res.send("Welcome to faker!")
})

app.get("/api/user/new", (req, res) => {
   res.json(new User());
});

app.get("/api/company/new", (req, res) => {
   res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
   const user = new User();
   const company = new Company();
   const userAndCompany = { user, company };
   res.json(userAndCompany);
});

const server = app.listen(8000, () =>
   console.log(`Server is locked and loaded on port ${server.address().port}!`)
);