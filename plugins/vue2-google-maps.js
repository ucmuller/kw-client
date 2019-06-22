import Vue from 'vue';
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAakjWRCf5vJKwi1O5eWOvzZjUpeoakO9c',
    libraries: 'places',
  },
});