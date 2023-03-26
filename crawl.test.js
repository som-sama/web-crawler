const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')


test('normalizeURL strip protocol', () => {
    const input = 'https://www.soumdatta.live/'
    const actual = normalizeURL(input)
    const expected = 'www.soumdatta.live/'
    expect(actual).toBe(expected)
})

test('normalizeURL strip trailing dash', () => {
    const input = 'https://www.soumdatta.live'
    const actual = normalizeURL(input)
    const expected = 'www.soumdatta.live/'
    expect(actual).toBe(expected)
})
test('normalizeURL capitals', () => {
    const input = 'https://WWW.SOUMDATTA.LIVE'
    const actual = normalizeURL(input)
    const expected = 'www.soumdatta.live/'
    expect(actual).toBe(expected)
})
test('normalizeURL strip http', () => {
    const input = 'http://www.soumdatta.live'
    const actual = normalizeURL(input)
    const expected = 'www.soumdatta.live/'
    expect(actual).toBe(expected)
})
