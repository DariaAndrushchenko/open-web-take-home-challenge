
import { When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { SECRET_WORD_SCREEN_IDS, TESTS_SCREEN_IDS } from '../../const';

When("I open the Secret Word test", async () => {
    const secretWordButton = await $(TESTS_SCREEN_IDS.secretWordTestButtonIdentifier)
    await secretWordButton.click()
});

Then("Secret word element is displayed and is not empty", async () => {
    const secretWordElement = await $(SECRET_WORD_SCREEN_IDS.secretWordIdentifier)
    expect(secretWordElement).toBePresent()
    const secretWordValue = await secretWordElement.getText()
    console.log('SECRET_WORD_VALUE:', secretWordValue)
    expect(secretWordValue).toBeTruthy()
});
