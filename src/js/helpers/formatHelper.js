export function formatDistance(d){
  let unit = 'm'

  if(d >= 1000){
    d = (d/1000)
    unit = 'km'
  }

  return `${parseFloat(d).toFixed(2)} ${unit}`;
}

export function formatArea(a){
  let unit = 'm<sup>2</sup>'

  if(a >= 1e4 && a < 1e6){
    a = (a/1e4)
    unit = 'ha'
  }

  if(a >= 1e6){
    a = (a/1e6)
    unit = 'km<sup>2</sup>'
  }

  return `${parseFloat(a).toFixed(2)} ${unit}`;
}