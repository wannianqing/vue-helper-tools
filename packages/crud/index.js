import KsCrud from './src/index.vue';

KsCrud.install = function(Vue) {
    Vue.component(KsCrud.name, KsCrud);
}

export default KsCrud;
