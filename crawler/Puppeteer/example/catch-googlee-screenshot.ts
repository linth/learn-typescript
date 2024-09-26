/**
 * 截圖: 使用 Puppeteer 截取google網站的屏幕快照
 * 
 */
import puppeteer from "puppeteer";


(async () => {
	// 啟動瀏覽器
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();

	// 設定視口大小
	await page.setViewport({ width: 1280, height: 720 });

	// 導航到目標網站
	await page.goto('https://www.google.com', { waitUntil: 'networkidle0' });

	// 截取屏幕快照
	await page.screenshot({ path: 'screenshot.png' });

	console.log('Screenshot taken!');

	// 關閉瀏覽器
	await browser.close();
})()
