<template>
  <div class="module container">
    <div v-if="headline" class="row">
      <div class="col">
        <h5>{{ headline }}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div ref="map" class="map" :style="{ 'height': mapHeightInPx }" />
      </div>
    </div>
    <div class="stat row">
      <div class="col">
        <div class="stat__element stat__element--distance">
          <div class="stat__element-caption">
            Distance
          </div>
          <div class="stat__element-value">
            {{ distance }} km
          </div>
        </div>
      </div>
      <div class="col">
        <div class="stat__element stat__element--elevation">
          <div class="stat__element-caption">
            Elevation Gain
          </div>
          <div class="stat__element-value">
            {{ elevationGain }} m
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MapModule',

  props: {
    headline: {
      type: String,
      required: false,
      default: ''
    },
    mapHeight: {
      type: Number,
      required: false,
      default: 200
    },
    gpxData: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      map: null
    }
  },

  computed: {
    distance() {
      return (this.gpxData.info.length / 1000).toFixed(2)
    },

    elevationGain() {
      return this.gpxData.info.elevation.gain.toFixed()
    },
    mapHeightInPx() {
      return this.mapHeight + 'px'
    }
  },

  mounted() {
    const mapbox = require('mapbox-gl/dist/mapbox-gl.js')
    mapbox.accessToken =
      'pk.eyJ1IjoiamVuc2hhYXNlIiwiYSI6ImNqZ2lmNjBnODBsaW4zM3FxZnptZjh0Nm0ifQ.nwSisV89eFZOuNYBmds_AQ'
    this.map = new mapbox.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-74.5, 40],
      zoom: 9
    })

    axios.get(this.gpxData.path).then(
      function(response) {
        this.map.on(
          'load',
          function() {
            this.map.addLayer({
              id: 'route',
              type: 'line',
              source: {
                type: 'geojson',
                data: response.data
              },
              layout: {
                'line-join': 'round',
                'line-cap': 'round'
              },
              paint: {
                'line-color': '#e36e39',
                'line-width': 5,
                'line-opacity': 1
              }
            })
          }.bind(this)
        )

        this.map.fitBounds(this.getMapBound(mapbox, response.data), {
          padding: 20,
          duration: 0
        })
      }.bind(this)
    )
  },

  methods: {
    getMapBound(mapbox, geojson) {
      if (geojson.features[0].geometry.type === 'MultiLineString') {
        const coordinates = [].concat.apply(
          [],
          geojson.features[0].geometry.coordinates
        )

        return coordinates.reduce(function(bounds, coord) {
          return bounds.extend(coord)
        }, new mapbox.LngLatBounds(coordinates[0], coordinates[0]))
      } else {
        const coordinates = geojson.features[0].geometry.coordinates

        return coordinates.reduce(function(bounds, coord) {
          return bounds.extend(coord)
        }, new mapbox.LngLatBounds(coordinates[0], coordinates[0]))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/_functions.scss';
@import '~bootstrap/scss/_variables.scss';
@import '~bootstrap/scss/mixins';

.map {
  margin-bottom: 1em;
}

.module {
  margin-top: 1em;
  margin-bottom: 2em;
}

.stat {
  .col {
    &:after {
      content: '';
      display: block;
      border-right: 1px solid $gray-400;
      height: 24px;
      width: 1px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -12px;
    }

    &:last-child {
      &:after {
        content: none;
      }
    }
  }

  .stat__element {
    .stat__element-caption {
      color: $text-gray;
    }

    .stat__element-value {
      font-size: 1.4rem;
    }
  }
}
</style>
