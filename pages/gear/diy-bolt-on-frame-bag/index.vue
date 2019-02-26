<template>
  <div class="page">
    <article-header
      :title="title"
      :subtitle="subtitle"
    />

    <full-image-module src="https://via.placeholder.com/500?text=Completed Frame Bag on Bike" :ratio-width="16" :ratio-height="9" />

    <text-module>
      <p>{{ description }}</p>
    </text-module>

    <article-header title="Features" subtitle="My custom frame bag feature list" type="h2" />

    <div class="container feature-list">
      <div class="row">
        <div class="col-md-4">
          <div class="feature">
            <h3>Bolt-On Design</h3>
            <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
            <div class="feature__content">
              <p>The frame bag will be attached to the water bottle bolts. A plastic stiffer ensures that the bag stays in place.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Inner pocket</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>An inner pocket allows you to story small item inside the bag</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Hang loops</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>Hang loops can be used to wrap tent poles below the top tube of your bike</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Hydration port</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>TODO</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Two compartments</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>TODO</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Lace-up attachment</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>TODO</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Drainport</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>TODO</p>
          </div>
        </div>
      </div>
    </div>

    <article-header title="Tools" subtitle="Required tool to make this frame bag" type="h2" />

    <full-image-module src="https://via.placeholder.com/500?text=Picture of all tools on cutting board" :ratio-width="16" :ratio-height="9" />

    <text-module>
      <p>
        Not all tool here are absolutly necessary. However, they make your work much easier. 
        I definitely would recommand sewing clips instead of normal needles because it's not that easy to stitch to Cordura.
      </p>
      <ul>
        <li>Sewing machine</li>
        <li><a href="https://www.extremtextil.de/en/rotary-cutter-comfort-45mm-prym-olfa-611393.html">Rotary cutter</a></li>
        <li><a href="https://www.extremtextil.de/en/prym-olfa-cutting-mat-for-rotary-cutter-60-x-45cm.html">Cutting mat</a></li>
        <li>Ruler</li>
        <li>Scissor</li>
        <li>French chalk</li>
        <li><a href="https://www.extremtextil.de/en/vario-pliers-prym-390900.html">Vario plier</a></li>
        <li>sewing clips</li>
        <li>lighter</li>
      </ul>
    </text-module>

    <article-header title="Material" subtitle="Required material to make this frame bag" type="h2" />

    <full-image-module src="https://via.placeholder.com/500?text=picture of all material on cutting board" :ratio-width="16" :ratio-height="9" />

    <text-module>
      <ul>
        <li><a href="https://www.extremtextil.de/en/cordura-1000den-pu-coated-350g-sqm.html">1m Cordura, 1000den, PU-coated</a></li>
        <li><a href="https://www.extremtextil.de/en/cordura-500den-pu-coated.html">2m Cordura, 500den, PU-coated</a></li>
        <li><a href="https://www.extremtextil.de/en/polyethylen-pe-hd-1mm-sheets-330x498mm.html">Polyethylene, 1mm thickness</a></li>
        <li><a href="https://www.extremtextil.de/en/eyelets-with-washers-8mm-prym-541376-541374-541375.html">Eyelets with washers, 8mm</a></li>
        <li><a href="https://www.extremtextil.de/en/machine-needles-microtex-5x90.html">Machine needles/Microtex 5x90</a></li>
        <li><a href="https://www.extremtextil.de/en/sewing-thread-nylbond-60nm-1000m-role.html">Sewing Thread Nylbond, 60Nm</a></li>
        <li><a href="https://www.extremtextil.de/en/hooktape-for-sewing-050mm.html">1m Hooktape 50mm</a></li>
        <li><a href="https://www.extremtextil.de/en/looptape-for-sewing-050mm.html">1m Looptape 50mm</a></li>
        <li><a href="https://www.extremtextil.de/en/webbing-polyamid-20mm.html">1m Webbing (Polyamid) 20mm</a></li>
        <li><a href="https://www.extremtextil.de/en/twill-webbing-for-edgebinding-nylon-durable-19mm.html">1m Twill webbing for edgebinding, nylon, durable, 19mm</a></li>
        <li><a href="https://www.extremtextil.de/en/elastic-cord-3mm-round.html">3m Elastic Cord, 3mm, round</a></li>
        <li><a href="https://www.extremtextil.de/en/ykk-aquaguard-5c-zippertape-by-the-meter.html">2m YKK AQUAGUARD 5C Zippertape by the meter</a></li>
        <li><a href="https://www.extremtextil.de/en/ykk-aquaguard-5c-slider-w-oval-pull.html">2x YKK AQUAGUARD 5C Slider with oval pull</a></li>
        <li><a href="https://www.extremtextil.de/en/cordloc-with-spring.html">1x Cordloc with spring</a></li>
      </ul>
    </text-module>

    <article-header title="Make a template" subtitle="Use a cardboard to create a template of your inner frame triangle" type="h2" />

    <full-image-module src="https://via.placeholder.com/500?text=finished cardboard template" :ratio-width="16" :ratio-height="9" />

    <text-module>
      <p>
        The first to build a frame bag is to make a template of your inner frame triangle. Therefore, you can use a cardboard or a large poster.
        Mark all details of your frame, bottle cage mounts, logs and cable routing holes. 
        Here's a <a href="https://vimeo.com/36255331">How to make a template video</a> that explains the process in detail.
      </p>

      <p>
        Next, measure your the length of your template. I always tend to make a paper sketch of the triangle and add the measures.
      </p>
    </text-module>

    <article-header title="Cut the triangles and the panels" type="h2" />

    <text-module>
      <ul>
        <li>Seam allowence = 1cm</li>
        <li>Discuss panels</li>
      </ul>
    </text-module>

    <image-module>
      <image-module-row>
        <image-module-image src="https://via.placeholder.com/500?text=2D sketch of panels" :ratio-width="16" :ratio-height="9" />
      </image-module-row>
      <image-module-row>
        <image-module-image src="https://via.placeholder.com/500?text=Triangle with Cardboard" :ratio-width="16" :ratio-height="9" />
        <image-module-image src="https://via.placeholder.com/500?text=Panels" :ratio-width="16" :ratio-height="9" />
      </image-module-row>
    </image-module>

    <article-header title="FAQ" subtitle="Question I asked myself during the process" type="h2" />

    <text-module>
      <ul>
        <li>What is the left/right side of cordura?</li>
        <li>What stitch type do I use (and length of stitch)?</li>
        <li>Can I just stitch over the zipper?</li>
      </ul>
    </text-module>

  </div>
</template>

<script>
import ArticleHeader from '~/components/ArticleHeader.vue'
import TextModule from '~/components/TextModule.vue'
import FullImageModule from '~/components/FullImageModule.vue'
import AspectImage from '~/components/AspectImage.vue'
import ImageModule from '~/components/ImageModule.vue'
import ImageModuleRow from '~/components/ImageModuleRow.vue'
import ImageModuleImage from '~/components/ImageModuleImage.vue'

export default {
  components: {
    ArticleHeader,
    FullImageModule,
    TextModule,
    AspectImage,
    ImageModule,
    ImageModuleRow,
    ImageModuleImage
  },

  data() {
    return {
      title: 'DIY Bolt-On Frame Bag',
      subtitle: 'Complete guide on how to build your own bikepacking frame bag',
      description: 'TODO: Add description'
    }
  },

  head() {
    return {
      title: this.title + ' - ' + this.subtitle,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-list {
  margin-top: 2em;
}
</style>
