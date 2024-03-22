# ToDo

A simple ToDo application. This project was built with the purpose of learning Angular based on [this](https://github.com/bradtraversy/angular-crash-2021) tutorial.

<p align="center">
  <img src="https://github.com/y-s18/ToDo/blob/0304e7948efce6672424b26a170e520200244d29/Images/ToDo.png" width=50% height=50%>
</p>

## Requirements

* TypeScript 5.3.3
* Angular 17.1.2
* NodeJS 20.10.0
* JSON-Server 1.0.0-alpha.23

## Steps to install

**1. Clone the application**

```bash
git  clone https://github.com/y-s18/ToDo.git
```

**2. Install NodeJS and Angular**

You can download NodeJS from [here](https://nodejs.org/en/download). Type `node -v` to check the version.

To install angular, run the following command.
```bash
npm install -g @angular/cli
```
You can specify the version by typing `@angular/cli@desired.version.here`. Run `ng v` to check the installed version.

**3. Run the application**

+ Run `npm run server` to start the JSON-Server ([http://localhost:5000](http://localhost:5000/)).
+ Run `ng serve -o` to start the application ([http://localhost:4200](http://localhost:4200/)).
