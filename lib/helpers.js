export const helpers = {
    click: async (page, selector) => {
        try {
            await page.waitForSelector(selector)
            await page.click(selector)
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },
    getText: async (page, selector) => {
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector, el => el.innerHTML)
        } catch (error) {
            throw new Error(`Cannot get text from selector: ${selector}`)
        }
    },
    getCount: async (page, selector) => {
        try {
            await page.waitForSelector(selector)
            return await page.$$eval(selector, el => el.length)
        } catch (error) {
            throw new Error(`Cannot get count of selector: ${selector}`)
        }
    }
}