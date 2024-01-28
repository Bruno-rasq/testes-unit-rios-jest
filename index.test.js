const { sum, inOneHour, romanNumerals } = require('./index')

describe('Math Functions', () => {
  
  //beforeAll(() => console.log('before all'))

  //beforeEach(() => conbsole.log('before each'))

  //afterAll(() => console.log('after all'))

  //afterEach(() => console.log('after each'))
  
  it('sums 2 numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('add numbers to the zero', () => {
    for(let i = 1; i < 5; i++){
      for(let j = 1; j < 5; j++){
        expect(sum(i, j)).not.toBe(0)
      }
    }
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

describe('converting functions', () => {
  it('converts a decimal number to a roman number', () => {
    expect(romanNumerals(1)).toBe('I')
  })
})

describe('object', () => {

  test('attribui uma chave valor', () => {
    const data = { one:1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
  })
})