(function() {
  'use strict'

  var entries = [
    {
      loc: [40.6110589, -111.8999352],
      popup: "[Space Monkey](http://spacemonkey.com)"
    },
    {
      loc: [40.5548965,-111.9147611],
      popup: "[Hire Vue](http://hirevue.com/)"
    },
    {
      loc: [40.5282631,-111.8823318],
      popup: "[Lucid chart](https://www.lucidchart.com/)"
    },
    {
      loc: [40.301899,-111.6586304],
      popup: "[MoneyDesktop](http://moneydesktop.com/)"
    },
    {
      loc: [40.3614467,-111.7817695],
      popup: "[DropShip](http://dropship.com/)"
    }
  ]

  var map = L.map('map', {
  }).setView([40.7607793, -111.891047], 9)
  L.tileLayer('http://{s}.tiles.mapbox.com/v3/supershabam.gp32cc1l/{z}/{x}/{y}.png').addTo(map)
  entries.forEach(function(entry) {
    L.marker(entry.loc)
      .bindPopup(marked(entry.popup))
      .addTo(map)
  })
}())
;
