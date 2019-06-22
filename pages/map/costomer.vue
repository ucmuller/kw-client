<template>
  <div>
    <p>{{maplocation}}</p>
    <br/>

    <GmapMap style="width: 60%; height: 600px; margin: auto;" :zoom="16" :center="maplocation" ref="mmm">
      <GmapMarker v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        />
      <GmapMarker
        v-if="this.maplocation"
        label=""
        :position="{
          lat: maplocation.lat,
          lng: maplocation.lng,
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
      maplocation:{lng: 139.76712480000003, lat: 35.68123620000001}
    }
  },
  created:function() {
    this.setLocation()
  },
  methods: {
    setLocation(){
      this.maplocation.lng = 139.70163579999996;
      this.maplocation.lat = 35.6580339;
      this.markers.push({
          position: {
            lat: this.maplocation.lng,
            lng: this.maplocation.lat,
          }
      })
    }
  }
}
</script>
