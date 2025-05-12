import test, { expect } from "@playwright/test";

test('Create Lead', async({page}) => {
    let actualText = 'Harini'

    await page.goto("https://login.salesforce.com")
    await page.waitForTimeout(3000)
    await page.locator('//input[@id = "username"]').fill("vidyar@testleaf.com")
    await page.locator('//input[@id = "password"]').fill("Sales@123")
    await page.locator('//input [@id = "Login"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//div[@class ="slds-icon-waffle"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//button[text() ="View All"]').click()
    await page.waitForTimeout(3000)
    //await page.click('text = Sales')
    //await page.getByRole('link', { name: 'Sales' }).click();
    //await page.getByText('Sales').click()
    //await page.getByPlaceholder('Search this list...').fill('Sales')
    //await page.locator('.slds-input').click();
    //await page.getByRole('text', { type: 'search'}).click();
    await page.locator('//p[text()="Sales"]').click()
    //await page.locator('img[src="https://testleaf-da-dev-ed.develop.my.salesforce.com/logos/Salesforce/SalesCloud/logo.png"]').click();
    await page.waitForTimeout(3000)
    await page.click('text = Leads')
    await page.waitForTimeout(3000)
    await page.click('text = New')
    await page.waitForTimeout(3000)
    await page.getByRole('combobox').first().click()
    setTimeout(function(){debugger;},3000);
    await page.click('text = Mrs.');
    await page.waitForTimeout(10000);
    await page.locator('//input[@name="lastName"]').fill(actualText);
    await page.waitForTimeout(3000)
    await page.locator('//input[@name="Company"]').fill('KPS');
    await page.waitForTimeout(3000)
    //await page.click('text = Save')
    await page.locator('//button[@name="SaveEdit"]').click()
    await page.locator('//slot[@name ="primaryField"]').waitFor()
    const expectedText = await page.locator('//lightning-formatted-name[@slot="primaryField"]').textContent()
    console.log(expectedText);
    expect(expectedText).toContain(actualText)
    console.log('Values match!');

    // if (actualText === expectedText) {
    //     console.log('Values match!');
    //     await page.waitForTimeout(3000)
    // } else {
    //     console.log('Values do not match');
    // }
})

test('Edit Lead', async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000)
    await page.locator('//input[@id ="username"]').fill("DemoSalesManager")
    await page.locator('//input[@id ="password"]').fill("crmsfa")
    await page.locator('//input[@class="decorativeSubmit"]').click()
    await page.waitForTimeout(3000)
    await page.click('text = CRM/SFA')
    await page.waitForTimeout(3000)
    await page.click('text = Leads')
    await page.waitForTimeout(3000)
    await page.click('text = Create Lead')
    await page.waitForTimeout(3000)  
    await page.locator('//input[@id ="createLeadForm_companyName"]').fill("COGNIZANT")
    await page.locator('//input[@id ="createLeadForm_firstName"]').waitFor()
    await page.locator('//input[@id ="createLeadForm_firstName"]').fill("MARSHALL")
    await page.waitForTimeout(3000) 
    await page.locator('//input[@id ="createLeadForm_lastName"]').fill("PAUL")
    await page.waitForTimeout(3000) 
    await page.locator('//input[@class ="smallSubmit"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//a[text()="Edit"]').click()
    await page.locator('//input[@id ="updateLeadForm_companyName"]').waitFor()
    await page.locator('//input[@id ="updateLeadForm_companyName"]').fill("CTS")
    await page.locator('//input[@value ="Update"]').click() 
})

test('Create Individuals', async({page}) => {
    const actualName = "Saranya"
   
    await page.goto("https://login.salesforce.com")
    await page.waitForTimeout(3000)
    await page.locator('//input[@id = "username"]').fill("vidyar@testleaf.com")
    await page.locator('//input[@id = "password"]').fill("Sales@123")
    await page.locator('//input [@id = "Login"]').click()
    await page.waitForTimeout(6000)
    await page.locator('//div[@class ="slds-icon-waffle"]').click()
    await page.waitForTimeout(5000)
    await page.locator('//button[text() ="View All"]').click()
    await page.waitForTimeout(5000)
    await page.click('text = Individuals')
    await page.waitForTimeout(3000)  
    //await inputLocator.press('Enter');
    await page.locator('(//*[name() ="svg" and @class="slds-icon slds-icon-text-default slds-icon_xx-small"])[7]').isVisible()
    await page.locator('(//*[name() ="svg" and @class="slds-icon slds-icon-text-default slds-icon_xx-small"])[7]').click()
    setTimeout(function(){debugger;},3000);
    await page.click('text = New Individual')
    await page.waitForTimeout(3000)
    await page.locator('(//a[text()="--None--"])[1]').click()
    setTimeout(function(){debugger;},3000);
    await page.click('text = Mrs.');
    await page.waitForTimeout(3000)
    await page.locator('//input[@class ="lastName compoundBLRadius compoundBRRadius form-element__row input"]').fill(actualName)
    await page.waitForTimeout(3000)
    await page.locator('.slds-button.slds-button_neutral.uiButton--brand.uiButton.forceActionButton').click()
    await page.waitForTimeout(5000)
    const actualText = await page.locator('//div[@class="slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text"]').getAttribute('title')
    //await expect(page.locator('.uiOutputText')).toContainText(actualName)
    expect(actualText).toContain(actualName);
    console.log("Strings match!");
    
})

test('Edit Individuals', async({page}) =>{
    const editName = "james"

    await page.goto("https://login.salesforce.com")
    await page.waitForTimeout(3000)
    await page.locator('//input[@id = "username"]').fill("vidyar@testleaf.com")
    await page.locator('//input[@id = "password"]').fill("Sales@123")
    await page.locator('//input [@id = "Login"]').click()
    await page.waitForTimeout(6000)
    await page.locator('//div[@class ="slds-icon-waffle"]').click()
    await page.waitForTimeout(5000)
    await page.locator('//button[text() ="View All"]').click()
    await page.waitForTimeout(3000)
    await page.click('text = Individuals')
    await page.waitForTimeout(3000)
    await page.locator('//input[@name="Individual-search-input"]').fill(editName)
    await page.keyboard.press('Enter');
    //await page.locator('//input[@name="Individual-search-input"]').press('Enter');
    await page.waitForTimeout(3000)
    await page.locator('(//span[text() ="Show Actions"])[1]').click()
    setTimeout(function(){debugger;},3000);
    await page.locator('(//a[@title ="Edit"])[1]').click()
    setTimeout(function(){debugger;},3000);
    await page.locator('(//a[text()="--None--"])[1]').click()
    setTimeout(function(){debugger;},3000);
    await page.click('text = Mr.');
    await page.locator('//input[@class="firstName compoundBorderBottom form-element__row input"]').click()
    await page.locator('//input[@class="firstName compoundBorderBottom form-element__row input"]').fill("Peter")
    await page.locator('.slds-button.slds-button_neutral.uiButton--brand.uiButton.forceActionButton').click()
    await page.waitForTimeout(6000)
    // const updatedName =await expect (page.locator('//div[@title="Mr. v Peter"]')).toHaveText("Peter")
    // console.log(updatedName)
    //expect(updatedName).toBe("Peter");
    const elementTitle = await page.locator('//a[@class ="slds-truncate outputLookupLink slds-truncate outputLookupLink-0PKJ2000000KyyLOAS-2286:0 forceOutputLookup"]').getAttribute('title');
    expect(elementTitle).toContain("Peter");
    //await expect(locator).toHaveText(/Partial Text/);
    console.log("Strings match!");

})
