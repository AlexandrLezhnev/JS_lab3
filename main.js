"use strict";

fetch("Coffee.JSON")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })