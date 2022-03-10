
import {Given,When,And,Then,Before} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../Pages/home_page'
let home=new HomePage()

Given('I navigate site',()=>{
home.visit()

})
Then('I see Shift Home page',()=>{
    home.verifyLogo()
    home.visitSeller()
    
})