import {
  expect,
  test,
  type Page,
  type PageAssertionsToHaveScreenshotOptions,
} from '@playwright/test'

const options: PageAssertionsToHaveScreenshotOptions = {
  fullPage: true,
}

async function loadStory(page: Page, story: string) {
  await page.goto(`/iframe.html?id=react-activity-calendar--${story}`)
  await page.waitForSelector('.react-activity-calendar', { state: 'visible' })
}

test('default', async ({ page }) => {
  await loadStory(page, 'default')
  await expect(page).toHaveScreenshot('default.png', options)
})

test('loading', async ({ page }) => {
  await loadStory(page, 'loading')
  await expect(page).toHaveScreenshot('loading.png', options)
})

test('activity-levels', async ({ page }) => {
  await loadStory(page, 'activity-levels')
  await expect(page).toHaveScreenshot('activity-levels.png', options)
})

test('date-ranges', async ({ page }) => {
  await loadStory(page, 'date-ranges')
  await expect(page).toHaveScreenshot('date-ranges.png', options)
})

test('color-themes', async ({ page }) => {
  await loadStory(page, 'color-themes')
  await expect(page).toHaveScreenshot('color-themes.png', options)
})

test('explicit-themes', async ({ page }) => {
  await loadStory(page, 'explicit-themes')
  await expect(page).toHaveScreenshot('explicit-themes.png', options)
})

test('customization', async ({ page }) => {
  await loadStory(page, 'customization')
  await expect(page).toHaveScreenshot('customization.png', options)
})

test('event-handlers', async ({ page }) => {
  await loadStory(page, 'event-handlers')
  await expect(page).toHaveScreenshot('event-handlers.png', options)
})

test('tooltips', async ({ page }) => {
  await loadStory(page, 'tooltips')
  await expect(page).toHaveScreenshot('tooltips.png', options)
})

test('without-labels', async ({ page }) => {
  await loadStory(page, 'without-labels')
  await expect(page).toHaveScreenshot('without-labels.png', options)
})

test('weekday-labels', async ({ page }) => {
  await loadStory(page, 'weekday-labels')
  await expect(page).toHaveScreenshot('weekday-labels.png', options)
})

test('localized-labels', async ({ page }) => {
  await loadStory(page, 'localized-labels')
  await expect(page).toHaveScreenshot('localized-labels.png', options)
})

test('monday-as-week-start', async ({ page }) => {
  await loadStory(page, 'monday-as-week-start')
  await expect(page).toHaveScreenshot('monday-as-week-start.png', options)
})

test('narrow-screens', async ({ page }) => {
  await loadStory(page, 'narrow-screens')
  await expect(page).toHaveScreenshot('narrow-screens.png', options)
})

test('container-ref', async ({ page }) => {
  await loadStory(page, 'container-ref')
  await expect(page).toHaveScreenshot('container-ref.png', options)
})
