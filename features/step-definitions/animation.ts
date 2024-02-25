
import { When, Then } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals'
import { ANIMATION_SCREEN_IDS, TESTS_SCREEN_IDS, } from '../../const';

When("I open the Animation test", async () => {
    const animationButton = await $(TESTS_SCREEN_IDS.animationTestButtonIdentifier)
    await animationButton.click()
});

Then("Animation is finished and element is visible", async () => {
    const animationDescriptionElement = await $(ANIMATION_SCREEN_IDS.descriptionLblIdentifier)
    await animationDescriptionElement.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Animation description was not displayed in time' })
});


