const { normalizeURL } = require('./crawl')
const { test, expect } = require('@jest/globals')

test('normalizeURL, strip protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const real = normalizeURL(input)
    const expectation = 'blog.boot.dev/path'
    expect(real).toEqual(expectation)
})

test('normalizeURL, trailing dash', () => {
    const input = 'https://blog.boot.dev/path/'
    const real = normalizeURL(input)
    const expectation = 'blog.boot.dev/path'
    expect(real).toEqual(expectation)
})

test('normalizeURL, capitals', () => {
    const input = 'https://BLOG.boot.dev/path'
    const real = normalizeURL(input)
    const expectation = 'blog.boot.dev/path'
    expect(real).toEqual(expectation)
})

test('normalizeURL, strip http', () => {
    const input = 'http://blog.boot.dev/path'
    const real = normalizeURL(input)
    const expectation = 'blog.boot.dev/path'
    expect(real).toEqual(expectation)
})