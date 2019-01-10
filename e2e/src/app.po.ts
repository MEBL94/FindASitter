import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  login() {
    element(by.id('username')).sendKeys('myusername');
    element(by.id('password')).sendKeys('mypassword');
    element(by.id('btnLogin')).click();
  }

  registerSitter() {
    element(by.id('username')).sendKeys('Mathias');
    element(by.id('password')).sendKeys('Mathias');
    element(by.id('name')).sendKeys('Mathias');
    element(by.id('select-gender')).sendKeys('Male');
    element(by.id('birthDate')).sendKeys('03-04-1994');
    element(by.id('no-criminal-record')).click();
    element(by.id('no-child-record')).click();
    element(by.id('hourly-wage')).sendKeys(7000);
    element(by.id('address')).sendKeys('Hundige');
    element(by.id('zipCode')).sendKeys('7000');
    element(by.id('city')).sendKeys('Greve');
    element(by.id('registerSitter')).click();
  }

}
