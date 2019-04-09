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

    <full-image-module :src="require('./img/frame-bag-tools.jpg')" :ratio-width="16" :ratio-height="9" />

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

    <full-image-module :src="require('./img/frame-bag-material.jpg')" :ratio-width="16" :ratio-height="9" />

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

    <full-image-module :src="require('./img/frame-bag-cardboard-template.jpg')" :ratio-width="16" :ratio-height="9" />

    <text-module>
      <p>
        The first to build a frame bag is to make a template of your inner frame triangle. Therefore, you can use a cardboard or a large poster.
        Mark all details of your frame, bottle cage mounts, logs, and cable routing holes. 
        Here's a <a href="https://vimeo.com/36255331">How to make a template video</a> that explains the process in detail.
      </p>

      <p>
        Next, measure the length of your template. I always tend to make a paper sketch of the triangle and add the measures.
        This sketch contains the length of each side and the positions of the zippers. Additionally, I put the measurements for the hydration port.
      </p>
    </text-module>

    <div class="container module full-image-module">
      <img :src="require('./img/frame-bag-sketch.svg')" style="width:100%" />
    </div>

    <article-header title="Cut the triangles and the panels" type="h2" />

    <text-module>
      <p>Using our cardboard and a sketch we can now cut the triangle and panels. To cut the triangle we place the cardboard on the fabric and transfer the form on the 
        fabric with one centimeter of seam allowance. If you have enough fabric you can fold it and cut both triangles at once.</p>

      <p>To cut the panels, we first have to determine the width of the final bag. If we make the bag too wide, there will be a risk of constant 
        knee rubbing. If we make it too small the is not enough place to put in stuff.</p>
      <p>To get the optimal wide of the bag, I first measured my knee distance while sitting on the bike. I measured a knee distance of seven centimeters. 
        Therefore, I choose to have a wide of 5.5 centimeters. Adding a seam allowance of 1 centimeter on each side the final width of the panel 
        is 7.5 centimeter. Additionally, I added five "safety" centimeters on each side of the panel. This can be cut later easily. The final measurements of my bag are:</p>
      <ul>
        <li><strong>Panel 1</strong> consists of A-Short, B and C (see sketch). The total length of these parts is 10cm + 55cm + 5cm = 70cm. Adding 5cm safeness the total size is <strong>80cm x 7.5cm</strong>.</li>
        <li><strong>Panel 2</strong> is equal to side D in the sketch. Therefore I need to cut a panel of <strong>38cm x 7.5cm</strong>.</li>
        <li><strong>Panel 3</strong> is equal to side A-Long in the sketch, which yields to a size of <strong>55cm x 7.5cm</strong></li>
      </ul>
      <p>Each panel has to be cut two times. The first is cut out of Cordura 1000d and the second out of Cordura 500d. In the next step,
        we will sew both panels together and put the plastic stiffer between them.</p>
    </text-module>

    <image-module>
      <image-module-row>
        <image-module-image :src="require('./img/frame-bag-cutting-the-template.jpg')" :ratio-width="16" :ratio-height="9" />
        <image-module-image :src="require('./img/frame-bag-cutted-panels.jpg')" :ratio-width="16" :ratio-height="9" />
      </image-module-row>
    </image-module>

    <article-header title="Make the zippers on the drive side triangle" type="h2" />

    <text-module>
      <p>After cutting the panels and triangle we will now prepare the triangles. On the drive side triangle we will add two zippers that allow us 
        to open the frame bag.</p>

      <p>First me make a two cuts in our drive side triangle. One cut for the to zipper and on cut for the second zipper. But don't forget that we added one centimeter of seam allowance.
        Therefore, we need to make the first cut at 18cm and the second cut at 3.5cm from the top.
        (Since I measured the distance of the zipper from the top of the bag I cut the second zipper first and than the first zipper.)</p>

      <p>On our template we now measure the length of the zippers. For the final zipper size we will remove 2 cm on each side. (Reißverschlusslänge: Gemessene Länge - 4cm)</p>

      <ul>
        <li>Länge 1: 46cm => 46cm - 4cm = 42cm</li>
        <li>Länge 2: 23.5cm => 23.5cm - 4cm = 19.5cm</li>
      </ul>

      <p>
        Reißverschlussenden: Breite = Breite von RV (3cm), Länge grob bemessen (10cm). Überstehendes kann man später abschneiden
      </p>

    </text-module>

    <article-header title="Make the compartment divider" type="h2" />

    <text-module>
      <p>Make divider first, because they need to be sewn together with the inner pocket</p>

      <p>Länge des Außenteil == Länge des 2. Reißverschlusses auf Template: 23.5cm</p>
      <p>Breite: 5.5 cm (Breite des Bags) + 1.5 cm zum annähen = 7cm</p>
      <p>2x schneiden</p>
    </text-module>

    <article-header title="Make the inner pocket on the non drive side triangle" type="h2" />

    <text-module>
      <p>Inner pocket: Platz nach oben 6cm frei lassen. Unteres Ende am Reißverschluss 2. => Höhe der Tasche 17cm - 6cm = 11cm</p>
      <p>Maße für den Stoffe:</p>
      <ul>
        <li>Höhe: 11cm + 1cm Nahtzugabe = 12cm </li>
        <li>Länge: Länge von RV1 auf Template + 2cm Nahtzugabe = 46cm + 2 = 48cm</li>
        <li>Überstehendes Material nach dem Zusammennähen abschneiden</li>
      </ul>

      <p>Next: Add 'Laschen'. Länge der Laschen: 4cm + 2x1cm Nahtzugabe = 6cm</p>
      <p>Klettverschluss</p>
    </text-module>

    <article-header title="Sew the panels" type="h2" />

    <text-module>
      <p>Start with panel 2 => easiest. Just sew together</p>
      <p>Next: panel 1 => Sew together. Add a some twill webbing at one edge (hydration hose)</p>
      <p>Next: panel 3 => On inner side add some some wedding, leave space for velcro. Next sew together. Next: Add twill webbing. </p>
    </text-module>

    <article-header title="Create the stiffers" type="h2" />

    <text-module>
      <p>Breite: 7.5cm - (2x 1.5cm) = 4.5 cm</p>
      <p>Länge: Außmessen</p>
    </text-module>

    <article-header title="Sew the bags inside out" type="h2" />

    <text-module>
      <p>TODO</p>
    </text-module>

    <article-header title="FAQ" subtitle="Question I asked myself during the process" type="h2" />

    <text-module>
      <ul>
        <li>What is the left/right side of cordura?</li>
        <li>What stitch type do I use (and length of stitch)?</li>
        <li>Can I just stitch over the zipper?</li>
      </ul>
    </text-module>


    <article-header title="Measurements and Cuttings" type="h2" />


    <text-module>
      <p>Measeruments</p>
      <ul>
        <li>Top Tube Length (A): 50cm</li>
        <li>Seat Tube Length (D): 28cm</li>
        <li>Down Tube Length (B): 55cm</li>
        <li>Connection Seat Tube Length to Down Tube Length (C): 5cm</li>
        <li>Zipper 1 Length (Zip1): 46cm</li>
        <li>Zipper 1 Distance from Top (Zip1-Top): 2.5cm</li>
        <li>Zipper 2 Length (Zip2): 23.5cm</li>
        <li>Zipper 2 Distance from Top (Zip2-Top): 17cm</li>
        <li>Bag Width (W): 5.5cm</li>
        <li>Seam allowance (S): 1cm</li>
        <li>Width of Zipper: (WZ): 3cm</li>
      </ul>

      <p>Cuttings</p>
      <ul>
        <li>Panel 1: Length: A-Short+B+C+10cm = 80cm, Width: W+2xS = 7.5cm</li>
        <li>Panel 2: Length: D+10cm = 38cm, Width: W+2xS = 7.5cm</li>
        <li>Panel 3: Length: A-Long+10cm = 55cm, Width: W+2xS = 7.5cm</li>
        <li>Triangle Drive Side: Size of Cutting Board with seam allowance</li>
        <li>Triangle Drive Side: Size of Cutting Board with seam allowance</li>
        <li>Inner Pocket: Height: Zip2-Top-6cm+S = 12cm: Width: Zip1+2xS = 48cm</li>
        <li>Divider1: Height: W+1.5*S = 7cm, Width:  Zip2 = 23.5cm</li>
        <li>Divider2: Height: W+1.5*S = 7cm, Width:  Zip2 = 23.5cm</li>
        <li>Zipper Extensions: Height: WZ = 3cm, Width: 10cm</li>
        <li>Zip2 in Triangle Drive Side: Distance from Top: Zip2-Top+S = 18cm</li>
        <li>Zip1 in Triangle Drive Side: Distance from Top: Zip1-Top+S = 3.5cm</li>
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
