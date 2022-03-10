import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import PracticePage1 from "../Pages/practice_page"

Given('I successfully browse to the application', () => {
    PracticePage1.loadHomePage()
})

When('I click on Practice button', () => {
PracticePage1.clickonPracticeBt()
   
})
Then('I should see the title of the page is {string}', (pageTitle) => {
 PracticePage1.getTitle(pageTitle)

})

When('I click on static dropdown option',()=>{
PracticePage1.getDropdownOption()
})

Then('I should be able to select Selenium option',()=>{
  PracticePage1.selectSelenium() 
})