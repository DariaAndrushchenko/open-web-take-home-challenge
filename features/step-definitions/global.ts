
import { Given, BeforeAll } from '@wdio/cucumber-framework';
import { driver, $ } from '@wdio/globals'
import { WELCOME_SCREEN_IDS } from '../../const';

// Should be env variable
const PASSWORD = 'OpenWebQA'

BeforeAll(async () => {
    await driver.execute('mobile: terminateApp', { bundleId: 'com.openweb.AutomationInterview' })
    await driver.execute('mobile: launchApp', { bundleId: 'com.openweb.AutomationInterview' })
})

Given("I'm logged in", async () => {
    const authInput = await $(WELCOME_SCREEN_IDS.passwordTextFieldIdentifier)
    await authInput.addValue(PASSWORD)
    const authButton = await $(WELCOME_SCREEN_IDS.autenticateBtnIdentifier)
    await authButton.click()
});
