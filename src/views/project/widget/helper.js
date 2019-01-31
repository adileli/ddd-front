export default {
    name: 'project-helper',
    mounted() {
        this.toggleLoadingProgress(false);
    },
    destroyed(){
        this.toggleLoadingProgress(true);
    },
    methods: {
        toggleLoadingProgress(status) {
            this.$store.commit('setLoading', status);
        }
    }
}
