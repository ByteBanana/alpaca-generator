import nose from './nose.png'

const importAll = (r) => {
  let files = []
  r.keys().forEach((key) => {
    var filenameWithExt = key.replace(/^.*[\\/]/, '')
    var name = filenameWithExt.replace(/\.[^/.]+$/, '')
    files.push({
      name: name,
      image: r(key).default
    })
  })

  return files
}

const accessories = importAll(require.context('./accessories'))
const backgrounds = importAll(require.context('./backgrounds'))
const ears = importAll(require.context('./ears'))
const eyes = importAll(require.context('./eyes'))
const hair = importAll(require.context('./hair'))
const leg = importAll(require.context('./leg'))
const mouth = importAll(require.context('./mouth'))
const neck = importAll(require.context('./neck'))

const Alpaca = {
  backgrounds,
  ears,
  hair,
  leg,
  neck,
  accessories,
  eyes,
  mouth,
  nose: {
    name: 'nose',
    image: nose
  }
}
export default Alpaca
