import puppeteer from "puppeteer";
import { expect } from "chai";


describe ('', () => {
    let browser 
    let page 

    before ( 'launch browser', async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            args: ["--start-maximized"]
        })
        page = await browser.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
        await page.setViewport({ width: 1280, height: 800 })
    })

    it ('tests', async () => {

        await page.goto('https://example.com/')
        await page.waitForXPath('//h1')
        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('h1', el => el.textContent)
        const count = await page.$$eval('p', el => el.length)

        expect(title).to.be.a('string', 'Example Domain')
        expect(url).to.include('example.com')
        expect(text).to.be.a('string', 'Example Domain')
        expect(count).to.equal(2)

        await page.goto('https://github.com/')
        await page.waitForXPath("//a[@href='/login']")
        const [signButton] = await page.$x("//a[@href='/login']")
        await signButton.click()
        await page.waitForXPath("//a[@href='/login']", { hidden: true, timeout: 3000 })
  
        await browser.close()
    })
}) 