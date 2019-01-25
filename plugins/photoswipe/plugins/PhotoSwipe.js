import PhotoSwipeComponent from '../components/PhotoSwipe.vue'

let $vm;

export default {
    install (Vue) {
        const PhotoSwipe = Vue.extend(PhotoSwipeComponent);

        if (!$vm) {
            $vm = new PhotoSwipe({el: document.createElement('div')});
            document.body.appendChild($vm.$el)
        }

        Vue.$photoswipe = {
            open (groupId, index, options) {
                $vm.open(groupId, index, options)
            },
            close () {
                $vm.close()
            },

            register (groupId, item) {
                return $vm.register(groupId, item)
            }
        };

        Vue.mixin({
            created () {
                this.$photoswipe = Vue.$photoswipe
            }
        })
    }
}