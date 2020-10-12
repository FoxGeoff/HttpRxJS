# Project: HttpRxJS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## These utility functions can be used for

* Converting existing code for async operations into observables.
* Iterating through the values in a stream.
* Mapping values to different types.
* Filtering streams.
* Composing multiple streams.

## RxJS Observable

Observable is here to fulfill your dreams of working in a way where you can subscribe how it will work and interact with different streams. We can call observable the blueprint of RxJS. It will collect new values and multiple events to work. In the previous version of Angular, we were using Promises to handle requests but we are no longer using it because Promises are not able to work on multiple events. RxJS Observable not only works like promises but can accomplish even more.

Asynchronous pattern operations happen because there is no need to block while waiting for the Observable to emit objects. Instead, it creates a protector, in the form of an observer, that stands ready to react appropriately at whatever future time the Observable does.

## RxJS Operators

Operators are the function that is built and creates new observables. Different operators are present in RxJS observable like map(), filter(), Concat(), and merge().

## Use of Operators in RxJS

* It has configuration options.
* It returns a function that takes a source observable. When returned to the function, the operators observe the data observables, deduce the value, and transform them.
* The operator is able to create new observables of the transformed values.

## Error Handling

To handle exceptions on subscriptions, ```catcherror()``` function is used. ```catcherror()``` function handles any damage to our Angular application whenever a response to a request fails.

We are using an API to request our data. Due to some errors, if API fails to respond then it will be handled in an observable that subscribes the error function.

In the above code (apicall service), we created the searchCountryByName() method to call the API. We are calling the HTTP GET method to get a list of all data by capital name. We requested the API URL, <https://restcountries-v1.p.rapidapi.com/capital/name>, while passing name to get a response map to the Country class using the map key. It will return a response and map to the object. If the capital is not found then it will throw a not found exception, which will throw an error, “Capital not found!”. In the header we append the API-key and Content-type.
