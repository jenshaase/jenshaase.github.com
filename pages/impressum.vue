<template>
  <div class="page">
    <article-header title="Legal Disclosure" />
    <text-module>
      <h3>Information in accordance with Section 5 TMG</h3>
      <p>
        Jens Haase<br>
        Teichhausstraße 51<br>
        64287 Darmstadt<br>
        Germany<br>
      </p>

      <h3>Kontakt</h3>

      <p>
        Telephone: +49<br>
        E-Mail: je.haase@gmail.com<br>
        Internet address: jenshaase.com
      </p>

      <h4>Accountability for content</h4>
      <p>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).</p>
        
      <h4>Accountability for links</h4>
      <p>Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>
        
      <h4>Copyright</h4>
      <p>Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws. </p>
    </text-module>
  </div>
</template>

<script>
import TextModule from '~/components/TextModule.vue'
import ArticleHeader from '~/components/ArticleHeader.vue'

export default {
  components: {
    TextModule,
    ArticleHeader
  },

  head() {
    return {
      title: 'Legal Disclosure'
    }
  }
}
</script>
