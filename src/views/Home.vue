<template>
    <div class="container">
        <p>这是Home页面</p>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },

    computed: {
        username () {
            return this.$route.params.username;
        } 
    },

    methods: {
        goback() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
</script>