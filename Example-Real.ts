const tuple = <T extends string[]>(...args: T) => args

const normalSizes = tuple('mini', 'small', 'medium', 'large', 'xlarge')
type NormalSizes = typeof normalSizes[number]

const sizes: { [key in NormalSizes]: string } = {
  mini: '1px',
  small: '1px',
  medium: '1.5px',
  large: '2px',
  xlarge: '2.5px'
}

console.log(sizes['xlarge'])
