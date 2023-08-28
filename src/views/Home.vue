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
    
    <!-- footer -->
    
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zeyy</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/contact" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Style.mu</a>. All Rights Reserved.</span>
        </div>
    </footer>
    
    
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