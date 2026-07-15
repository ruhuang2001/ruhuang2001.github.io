const { chromium } = require('playwright-chromium');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, colorScheme: 'dark' });
  await page.goto('http://localhost:3030/5?clicks=3', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const data = await page.evaluate(() => {
    const triPage = document.querySelector('.triangle-page');
    const tri = document.querySelector('.triangle');
    const first = document.querySelector('.first-class');
    const items = Array.from(document.querySelectorAll('.fc-item'));
    return {
      trianglePageDisplay: triPage ? getComputedStyle(triPage).display : null,
      trianglePageGridTemplate: triPage ? getComputedStyle(triPage).gridTemplateColumns : null,
      trianglePageRect: triPage ? triPage.getBoundingClientRect().toJSON() : null,
      triangleRect: tri ? tri.getBoundingClientRect().toJSON() : null,
      triangleDisplay: tri ? getComputedStyle(tri).display : null,
      firstClassRect: first ? first.getBoundingClientRect().toJSON() : null,
      itemCount: items.length,
      itemStyles: items.slice(0,2).map(el => ({
        display: getComputedStyle(el).display,
        gridTemplate: getComputedStyle(el).gridTemplateColumns,
        width: el.getBoundingClientRect().width,
        labelWidth: el.querySelector('.fc-item__label')?.getBoundingClientRect().width,
        listWidth: el.querySelector('.fc-item__list')?.getBoundingClientRect().width,
        labelText: el.querySelector('.fc-item__label')?.textContent,
        listText: el.querySelector('.fc-item__list')?.textContent,
      })),
      nodes: Array.from(document.querySelectorAll('.triangle__node')).map(n => ({
        text: n.textContent,
        rect: n.getBoundingClientRect().toJSON(),
        color: getComputedStyle(n.querySelector('.triangle__label')).color,
        opacity: getComputedStyle(n).opacity,
        visibility: getComputedStyle(n).visibility,
      })),
      svgRect: document.querySelector('.triangle__svg')?.getBoundingClientRect().toJSON(),
    };
  });
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
