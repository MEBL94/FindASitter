import { browser, element, by, $$ } from "protractor";
import { AppPage } from "./app.po";

/* 
 1.0: Create a new sitter
*/



describe('sitters-list', () => {
  let page = new AppPage();

  // 1: Navigate to findasitter
  // 2: Fill out login and click
  // 3: Count number of sitters (a)
  // 4: Navigate to register without browser.get (no page reload!)
  // 5: Fill out form to register a new sitter.
  // 6: Navigate to sitters-list without browser.get (no page reload!)
  // 7: Count number of sitters (b)
  // 8: Expect b-a should be 1

  it('Create and Read Sitter. login - read - count - reg - login - read - count - compareCount', () =>{
    browser.get('/login');
    page.login()
    element.all(by.css('.example-card')).then(function(elemsBefore){
        let numberOfSittersBefore = elemsBefore.length;
        element(by.id('login')).click();
        element(by.id('show-reg-sitter')).click();
        page.registerSitter();
        page.login();
        element.all(by.css('.example-card')).then(function(elemsAfter) {
            let numberOfSittersAfter = elemsAfter.length;
            expect(numberOfSittersAfter-numberOfSittersBefore).toBe(1);
        });
    });
});
it('Delete the sitter made from last "it" statement. login - read - count - delete - read - count - compareCount', () =>{ 
  browser.get('/login');
  page.login();
  element.all(by.css('.example-card')).then(function(elemsBefore){
      let numberOfSittersBefore = elemsBefore.length;
      element.all(by.css('.example-card')).last().element(by.id('delete')).click();
      element.all(by.css('.example-card')).then(function(elemsAfter) {
          let numberOfSittersAfter = elemsAfter.length;
          expect(numberOfSittersBefore-numberOfSittersAfter).toBe(1);
      });
  });
});

});