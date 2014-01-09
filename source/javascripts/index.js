(function() {
  'use strict'

  var entries = [
    {
      loc: [40.6110589, -111.8999352],
      popup: [
        "#space monkey",
        "",
        "Space Monkey is taking the cloud out of the datacenter creating a faster, cheaper, and more durable way to store and access data, from any device.",
        "",
        "[http://spacemonkey.com](http://spacemonkey.com)"
      ].join("\n")
    }
  ]

  var map = L.map('map').setView([40.7607793, -111.891047], 9)
  L.tileLayer('http://{s}.tiles.mapbox.com/v3/supershabam.gp32cc1l/{z}/{x}/{y}.png').addTo(map)
  entries.forEach(function(entry) {
    L.marker(entry.loc)
      .bindPopup(marked(entry.popup))
      .addTo(map)
  })
}())
