import puppeteer, {KnownDevices} from "puppeteer";

describe ( 'Device Emulation', async () => {
    let browser
    let page

    before ( 'launch browser', async () => {
        browser = await puppeteer.launch({ 
            headless: false, 
            slowMo: 50, 
            args: [ "--start-maximized" ] 
        })
        const context = await browser.createIncognitoBrowserContext() //create a new incognito browser
        page = await context.newPage() //necessário substituir browser pela variável context
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
    })

    after ( 'end of test', async () => {
        await browser.close()
    })

    it ( 'Desktop Device Test', async () => {
        await page.setViewport({ width: 1650, height: 1050})
        await page.goto('https://example.com/')
        await page.waitForTimeout(5000)
    })

    it ( 'Tablet Device Test', async () => {
        const tablet = KnownDevices['iPad landscape']
        await page.emulate(tablet)
        await page.goto('https://example.com/')
        await page.waitForTimeout(5000)
    })

    it ( 'Mobile Device Test', async () => {
        const mobile = KnownDevices['iPhone X']
        await page.emulate(mobile)
        await page.goto('https://example.com/')
        await page.waitForTimeout(5000)
    })
})