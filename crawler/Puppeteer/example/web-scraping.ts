import puppeteer from "puppeteer";

/**
 * 網站爬蟲: 從 Hacker News 爬取最新的文章標題和 URL。
 * 
 */
(async () => {
	try {
		// 啟動瀏覽器
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		// 導航到 Hacker News
		await page.goto('https://news.ycombinator.com/', { waitUntil: 'networkidle0' });
		console.log('Page loaded');

		// 等待文章標題元素出現
		await page.waitForSelector('.title', { timeout: 5000 });

		// 爬取文章標題和 URL
		const articles = await page.evaluate(() => {
			const items = Array.from(document.querySelectorAll('.athing')); // storylink, titleline
			
			console.log('Items found:', items.length); // 檢查找到的項目數量

			return items.map(item => ({
				title: (item as HTMLAnchorElement).innerText,
				url: (item as HTMLAnchorElement).href,
			}));
		});

		console.log(`articles: ${JSON.stringify(articles)}`); // 輸出爬取的文章

		// 關閉瀏覽器
		await browser.close();
	} catch (error) {
		console.error('Error occurred:', error);
	}
})();
