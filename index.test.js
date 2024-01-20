const { sum, inOneHour } = require('./index')

describe('Math Functions', () => {
  
  //beforeAll(() => console.log('before all'))

  //beforeEach(() => conbsole.log('before each'))

  //afterAll(() => console.log('after all'))

  //afterEach(() => console.log('after each'))
  
  it('sums 2 numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
  
})

describe('time functions', () => {

  it('return the timestamp in one hour ahead', () => {
    const realDateNow = Date.now.bind(global.Date)
    global.Date.now = () => 0
    expect(inOneHour()).toBe(3600000)
    global.Date.now = realDateNow

  })
})