<template>
  <div class="page">
    <article-header
       :title="title"
       :subtitle="subtitle">
    </article-header>

    <full-image-module v-bind:src="require('./img/valentia-island-2.jpg')" v-bind:ratioWidth="16" v-bind:ratioHeight="9" title="Der Hafen von Kinsale"></full-image-module>

    <text-module>
      <p>{{ description }}</p>
    </text-module>

    <article-header title="Irish beaches" subtitle="Little irish beaches appear out of nowwhere" type="h2"></article-header>

    <text-module>

      <p>
        The first days started with a lot of little small and some bigger beaches along the southern coastline. 
        Even though I noticed them when I was planning my route, they were a big surprise since I wasn't expecting so many beautiful little beaches all over.
        However, the more I went north, the fewer beaches appear to me and the cliffs started to grow.
      </p>

      <p>
        Seeing the water of the Atlantic almost every day, was a bit strange when I learned about the water problems during this summer.
        Turns out the summer of 2018 credentials as one of the hottest, sunniest and driest in decades. While this was good for me and my cycling trip (no rain), it brought other disadvantages 
        to the country and all the people living on the Island. I learned that most drinkable water in Ireland is extracted from surface water like lakes and rivers. But due to a dry winter and this hot
        summer with nearly no rain, a lot of these water sources get dry or started to run out of water.
      </p>
    </text-module>

    <image-module>
      <image-module-row>
        <image-module-image v-bind:src="require('./img/strand/small-strand-1.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
      </image-module-row>
      <image-module-row>
        <image-module-image v-bind:src="require('./img/strand/ballybunion-beach-1.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Kleiner Strand direkt am Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/strand/bike-3.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Kleiner Strand direkt am Wild Altantic Way" />
      </image-module-row>
      <image-module-row>
        <image-module-image v-bind:src="require('./img/strand/the-long-strand-1.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Kleiner Strand direkt am Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/strand/red-strand-1.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Kleiner Strand direkt am Wild Altantic Way" />
      </image-module-row>
    </image-module>

    <article-header title="Irish cliffs" subtitle="Riding along the edges of a cliff" type="h2"></article-header>

    <text-module>
      <p>
        The further I went north, the more the little small beaches started to disappear and the cliff along the coastline started to grow.
        Looking down the cliff and seeing the waves smashing against the hard rocky walls was always a great experience, even if you had to pay a small amount of money.
      </p>
      <p>
        I also visited the well-known Cliffs of Moher.
        They were made free of charge, but full of people &ndash; and if you ever cycled a few days on your own, 
        you know how hard it is to get into a full crowd of people. 
        Instead of taking more time directly at the Cliffs of Moher I searched for 
        a B&amp;B nearby and did the Cliffs of Moher Coastal Walk in the evening at sunset.
      </p>
    </text-module>

    <image-module>
      <image-module-row>
        <image-module-image v-bind:src="require('./img/cliff/southernmost-point-2.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
      </image-module-row>
      <image-module-row>
        <image-module-image v-bind:src="require('./img/cliff/southernmost-point-1.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/cliff/southernmost-point-4.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/cliff/southernmost-point-3.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Small beach right on the Wild Altantic Way" />
      </image-module-row>
      <!-- <image-module-row>
        <image-module-image v-bind:src="require('./img/cliff/moher-5.jpg')" v-bind:ratioWidth="16" v-bind:ratioHeight="9" title="Small beach right on the Wild Altantic Way" />
      </image-module-row> -->
      <image-module-row>
        <!-- <image-module-image v-bind:src="require('./img/cliff/kerry-cliffs-1.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" /> -->
        <image-module-image v-bind:src="require('./img/cliff/kerry-cliffs-3.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/bike-2.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/cliff/kerry-cliffs-2.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
      </image-module-row>
      
      <image-module-row>
        <!-- <image-module-image v-bind:src="require('./img/cliff/slea-head-1.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Small beach right on the Wild Altantic Way" /> -->
        <image-module-image v-bind:src="require('./img/cliff/slea-head-2.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/cliff/slea-head-3.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
      </image-module-row>
      <image-module-row>
        <image-module-image v-bind:src="require('./img/bike-4.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/cliff/ballybunion-1.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/cliff/ballybunion-2.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Small beach right on the Wild Altantic Way" />
        <!-- <image-module-image v-bind:src="require('./img/cliff/ballybunion-3.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Small beach right on the Wild Altantic Way" /> -->
      </image-module-row>
      <image-module-row>
        <image-module-image v-bind:src="require('./img/cliff/moher-1.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
        <!-- <image-module-image v-bind:src="require('./img/cliff/moher-2.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Small beach right on the Wild Altantic Way" /> -->
        <image-module-image v-bind:src="require('./img/cliff/moher-3.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/cliff/moher-4.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
      </image-module-row>
      <!-- <image-module-row>
        <image-module-image v-bind:src="require('./img/cliff/sheap-head-1.jpg')" v-bind:ratioWidth="2" v-bind:ratioHeight="3" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/cliff/sheap-head-2.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/cliff/sheap-head-3.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
      </image-module-row> -->
    </image-module>

    

    <article-header title="Irish towns and people" subtitle="" type="h2"></article-header>

    <text-module>
      <p>
        Once, an Irish guy told me the Irish people only like temperatures between seven and thirteen degrees. However, these summer temperatures were
        mostly always above twenty degrees. After that, I understood while people constantly were asking me whether it was not too hot for cycling.
      </p>
    </text-module>

    <image-module>
      <image-module-row>
        <image-module-image v-bind:src="require('./img/town/kinsale-straße-1.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="4" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/town/kinsale-hafen.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/town/kinsale-straße-2.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="4" title="Small beach right on the Wild Altantic Way" />
      </image-module-row>
      <image-module-row>
        <image-module-image v-bind:src="require('./img/town/kenmare-1.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="2" title="Small beach right on the Wild Altantic Way" />
        <image-module-image v-bind:src="require('./img/town/kenmare-2.jpg')" v-bind:ratioWidth="3" v-bind:ratioHeight="4" title="Small beach right on the Wild Altantic Way" />
      </image-module-row>
    </image-module>

    <article-header title="Route in detail" subtitle="All my recorded GPS tracks (missing rest days)" type="h2"></article-header>

    <div class="module container">
      <div class="row">
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/01-welcome-to-ireland.gpx')" headline="Day 1: Welcome to Ireland"></MapModule>
        </div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/02-from-kinsale-to-skibbereen.gpx')" headline="Day 2: From Kinsale to Skibbereen"></MapModule>
        </div>
        <div class="w-100"></div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/03-from-skibbereen-to-kilcrohane.gpx')" headline="Day 3: From Skibbereen to Kilcrohane"></MapModule>
        </div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/04-from-kilcrohane-to-castletownbere.gpx')" headline="Day 4: From Kilcrohane to Castletownbere"></MapModule>
        </div>
        <div class="w-100"></div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/05-from-castletownbere-to-kenmare.gpx')" headline="Day 5: From Castletownbere to Kenmare"></MapModule>
        </div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/07-from-kenmare-to-valentia-island.gpx')" headline="Day 7: From Kenmare to Valentia Island"></MapModule>
        </div>
        <div class="w-100"></div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/08-from-valentia-island-to-kenmare.gpx')" headline="Day 8: From Valentia Island to Kenmare"></MapModule>
        </div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/09-from-kenmare-to-dingle.gpx')" headline="Day 9: From Kenmare to Dingle"></MapModule>
        </div>
        <div class="w-100"></div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/10-from-dingle-to-ballybunion.gpx')" headline="Day 10: From Dingle to Ballybunion"></MapModule>
        </div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/11-from-ballybunion-to-doolin.gpx')" headline="Day 11: From Ballybunion to Doolin"></MapModule>
        </div>
        <div class="w-100"></div>
        <div class="col-md-6">
          <MapModule v-bind:gpxData="require('./maps/13-from-doolin-to-galway.gpx')" headline="Day 13: From Doolin to Galway"></MapModule>
        </div>
        <div class="col-md-6">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageModule from "~/components/ImageModule.vue";
import ImageModuleRow from "~/components/ImageModuleRow.vue";
import ImageModuleImage from "~/components/ImageModuleImage.vue";
import AspectImage from "~/components/AspectImage.vue";
import FullImageModule from "~/components/FullImageModule.vue";
import MapModule from "~/components/MapModule.vue";
import PageHeader from "~/components/PageHeader.vue";
import ArticleHeader from "~/components/ArticleHeader.vue";
import TextModule from "~/components/TextModule.vue";

export default {
  components: {
    ImageModule,
    ImageModuleRow,
    ImageModuleImage,
    AspectImage,
    FullImageModule,
    MapModule,
    PageHeader,
    ArticleHeader,
    TextModule
  },

  data () {
    return {
      title: 'Wild Atlantic Way',
      subtitle: 'Two weeks of cycling along the Irish coastline',
      description: 'Ever since my first trip to Ireland, I dreamed of cycling along the wild Irish coast with my bicycle moving from one B&B to the next. Therefore, in 2018 I put my stuff together, got a flight to Dublin and started my 1000 km adventure from Cork to Galway.'
    }
  },

  head () {
    return {
      title: this.title + ' - ' + this.subtitle,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
