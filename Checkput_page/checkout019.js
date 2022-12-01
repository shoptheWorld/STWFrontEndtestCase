const {Builder,WebElement,JavascriptExecutor, until, By, Key, utill} = require("selenium-webdriver");
async function example () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/p/b07dpn1fq2-tecmac-tm-ra-8pin-rusbcabl-red-8-pin-lightning-usb-data-sync-charging-cable-3-3-feet-1-meter--red");
    // await driver.findElement(By.id("availableInput")).sendKeys("00000",Key.RETURN);
    // await driver.findElement(By.id("checkpin")).sendKeys(Key.RETURN);
    await driver.findElement(By.id("buynow")).sendKeys(Key.RETURN);
    // await driver.findElement(By.id("addtocart")).sendKeys(Key.RETURN);
    
    // console.log(await driver.findElement(By.name("first_name"))) 
    // .sendKeys("ManiKandan");
  
            // await driver.get("http://localhost:3000/page/account/checkout");
           
            driver.wait(until.elementLocated(By.name('first_name')), 10 * 1000).then(el => {
                el.sendKeys("Manikandan");
            });

            driver.wait(until.elementLocated(By.name('last_name')), 10 * 1000).then(el => {
                el.sendKeys("Ramasamy");
            });

            driver.wait(until.elementLocated(By.name('phone')), 10 * 1000).then(el => {
                el.sendKeys("7299693937");
            });

            driver.wait(until.elementLocated(By.id('email')), 10 * 1000).then(el => {
                el.sendKeys("maxisteve0@gmail.com");
            });

            driver.wait(until.elementLocated(By.name('address')), 10 * 1000).then(el => {
                el.sendKeys("Pallavaram");
            });

            driver.wait(until.elementLocated(By.name('city')), 10 * 1000).then(el => {
                el.sendKeys("Chennai");
            });

            driver.wait(until.elementLocated(By.name('state')), 10 * 1000).then(el => {
                el.sendKeys("Tamil Nadu");
            });

            driver.wait(until.elementLocated(By.name('pincode')), 10 * 1000).then(el => {
                el.sendKeys("600074");
            });


            // driver.wait(until.elementLocated(By.id('handlecontinue')), 10 * 1000).then(el => {
            //     el.sendKeys(Key.RETURN);

//                 WebElement radioBtn1 = driver.findElement(By.id("payment-4"));
// ((JavascriptExecutor) driver).executeScript("arguments[0].checked = true;", radioBtn1);

                //    driver.wait(until.elementLocated(By.id('payment-4')), 10 * 1000).then(el => {
                //     el.click(); 
                    
                // driver.wait(until.elementLocated(By.id('codBtn')), 10 * 1000).then(el => {
                //     el.sendKeys(Key.RETURN);
                // });
                // });
            // });
                // driver.wait(until.elementLocated(By.id('payment-4')), 10 * 1000).then(el => {
                //     el.sendKeys(Key.RETURN);
                    
                // driver.wait(until.elementLocated(By.id('codBtn')), 10 * 1000).then(el => {
                //     el.sendKeys(Key.RETURN);
                // });
                // });
    
    
        

       
            // await driver.findElement(By.id("firstname")).sendKeys("Manikandan");
            // await driver.findElement(By.name("last_name")).sendKeys("Ramasamy");
            // await driver.findElement(By.id("phone")).sendKeys("7299693937");
            // await driver.findElement(By.name("email")).sendKeys("maxisteve0@gmail.com");
            // await driver.findElement(By.name("address")).sendKeys("Pallavaram");
            // await driver.findElement(By.name("city")).sendKeys("Chennai");
            // await driver.findElement(By.name("state")).sendKeys("Tamil Nadu");
            // await driver.findElement(By.name("pincode")).sendKeys("600074");
            // await driver.findElement(By.id("handlecontinue")).sendKeys(Key.RETURN);
            // await driver.findElement(By.id("codBtn")).sendKeys(Key.RETURN);  
        
    
    
    
    
    
}
example();

// selenium-webdirver
// selenium-webdriver