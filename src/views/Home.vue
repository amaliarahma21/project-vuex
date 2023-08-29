<template>
    <div>
        <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src='../components/img/banner.jpg'  alt="">
        </div>
        </div>
    <!-- <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
            <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
               
            </div>
        </div>
    </section> -->
    
    
    <!-- gallery 3 -->
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
    <div class="grid grid-cols-4 gap-6 mt-5 ">
            <div>
                <img class="h-auto max-w-full rounded-lg" style="width: 250px; height: 250px; " src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" style="width: 250px; height: 250px;" src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" style="width: 250px; height: 250px;" src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" style="width: 250px; height: 250px;" src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95" alt="">
            </div>
        </div>
    
        <!-- gallery 4-->
    <div class="grid grid-cols-4 gap-6 mt-5 ">
            <div>
                <img class="h-auto max-w-full rounded-lg" style="width: 250px; height: 250px; " src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" style="width: 250px; height: 250px;" src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" style="width: 250px; height: 250px;" src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" style="width: 250px; height: 250px;" src="https://down-id.img.susercontent.com/file/sg-11134201-22100-moe08j3dj8iv95" alt="">
            </div>
        </div>
    </div>
    </div>
    </template>

    
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('product', ['getProduct'])
    },
    methods: {
        ...mapActions('product', ['fetchProduct']),
        capitalizeFirstLetter(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        },
        ...mapActions("keranjang", ["fetchKeranjang"]),
    },
    beforeMount() {
        this.fetchKeranjang();
    },

    mounted() {
        this.fetchProduct()
    }
}
</script>