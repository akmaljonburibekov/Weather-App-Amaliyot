const KEY = '96b947a45d33d7dc1c49af3203966408'

const getData = async (sity) => {
  const base = 'https://api.openweathermap.org/data/2.5/weather'
  const query = `?q=${sity}&units=metric&appid=${KEY}`
  loader(true)
  const req = await fetch(base + query)
  const data = await req.json()
  console.log(data)
  loader(false)
  return data
}