"use strict";
const describe_city = (city, country = "Pakistan") => {
    console.log(`${city} is in ${country}`);
};
describe_city("Hyderabad");
describe_city("Berlin", "Germany");
describe_city("Karachi");
