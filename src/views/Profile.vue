<template>
    <h1 class="text-gray-900">Nama: {{ userData.name }}</h1>
    <h1 class="text-gray-900">Email: {{ userData.email }}</h1>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        data(){
            return{
                uData : []
            }
        },
        computed: {
            ...mapState('users', ['userData']),
        },
        methods: {
            ...mapActions('users', ['fetchUser']),
        },
        created() {
            this.uData = this.fetchUser();
        },
    }
</script>