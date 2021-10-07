interface Human {
  sleep: () => void
}
class Man implements Human {
  sleep: () => void
  moustache: boolean
}
class Woman implements Human {
  sleep: () => void
  longHair: boolean
}
/**
 * typeof
 * instaceof
 */
const human = new Man()

if (typeof human === 'object') console.log('is object')

if (human instanceof Man) console.log('is Man')
else console.log('is Woman')

/**
 * string | numbers literals
 */

type labourDays = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'

const numberRandom = (): 1 | 2 | 3 | 4 | 5 | 6 => 6

const job: labourDays = 'monday'
