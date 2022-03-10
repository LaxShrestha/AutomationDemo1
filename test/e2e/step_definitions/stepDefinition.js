const { Given, Then, When } = require("cucumber");

Given(/^I successfully browse to the application$/, () => {
	return true;
});

When(/^I click on Practice button$/, () => {
	return true;
});

Then(/^I should see the title of the page is 'Automation Practice'$/, () => {
	return true;
});

When(/^I click on static dropdown option$/, () => {
	return true;
});

Then(/^I should be able to select Selenium option$/, () => {
	return true;
});
