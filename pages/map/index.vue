<template>
  <div>
    <label>
      AutoComplete
      <GmapAutocomplete @place_changed="setPlace">
      </GmapAutocomplete>
      <button @click="searchPlace">検索</button>
    </label>
    <p>{{maplocation}}</p>
    <br/>

    <GmapMap style="width: 60%; height: 600px; margin: auto;" :zoom="16" :center="maplocation" ref="setMap">
      <GmapMarker v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        />
      <GmapMarker
        v-if="this.place"
        label=""
        :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }"
        />
    </GmapMap>
  </div>
</template>

<script>


export default {
  data() {
    return {
      markers: [],
      place: null,
      maplocation:{lng:"", lat: ""}
    }
  },
  description: 'Autocomplete Example',
  created: function(){
    this.setCurrentPosition()
  },
  methods: {
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place
    },
    searchPlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        })
        this.maplocation.lat = this.place.geometry.location.lat();
        this.maplocation.lng = this.place.geometry.location.lng();
        console.log(this.maplocation)
        this.place = null;
        this.$refs.setMap.panTo(this.maplocation)
      }
    },

    async setCurrentPosition(){
      try {
        let currentPosition = await this.getPosition();
        let currentPositionLat = currentPosition.coords.latitude;
        let currentPositionLon = currentPosition.coords.longitude;

        console.log(currentPositionLat,currentPositionLon)

        this.maplocation.lat = currentPositionLat;
        this.maplocation.lng = currentPositionLon;

      } catch(error) {

        console.log(error)

      }
    },

    getPosition(){
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    }



  }
}
</script>
