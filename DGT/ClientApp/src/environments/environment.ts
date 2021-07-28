// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1Ijoic2lnbmFsZm91cmxhYiIsImEiOiJjazFzYTd6aXcwYTJtM2xvMGI2Y3dyN3JwIn0.OnpaWvdIZ2bmaEdvCspfPQ',
    style: 'mapbox://styles/signalfourlab/ckliezwsl12wh17n22vy39ch4'
    // style: 'mapbox://styles/mapbox/streets-v9'
  },
  arcGis: {
    suggestionService: {
      url: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates',
      defaultHttpParams: 'f=pjson&maxLocations=10&outFields=Addr_type&forStorage=false&location=-80.701897143875%2C27.853672521780087&searchExtent=-87.634930%2C24.544110%2C-80.031350%2C31.00075'
    }
  },
  s4: {
    crashEventService: {
      url: 'https://localhost:5001/api/v1/crash-event/'
    },
    reverseGeocodeService: {
      // full API route: key/lat/lng/agency/mode'
      url: 'https://s4.geoplan.ufl.edu/geolocation30/GeolocationService.svc/geocode/json/',
      key: '99AMUT9e4u',
      agency: 'FLD0T0900'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
