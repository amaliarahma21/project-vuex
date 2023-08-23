<template>
  <br>
  <br>
  <div class="lg:m-10">
    <form @submit.prevent="performSignup"
      class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
      <h1 class="mb-6 text-xl font-semibold text-center lg:text-2xl">REGISTER</h1>

      <div class="grid gap-3 md:grid-cols-1">
        <div>
          <label class=""> Name </label>
          <input v-model="name" type="text" placeholder="Your Name"
            class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
        </div>
      </div>
      <div>
        <label class=""> Email </label>
        <input v-model="email" type="email" placeholder="example@gmail.com"
          class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
      </div>
      <div>
        <label class=""> Phone: <span class="text-sm text-gray-400">(optional)</span> </label>
        <input v-model="phone" type="text" placeholder="+62 0895 1235 78"
          class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
      </div>
      <div>
        <label class=""> Password </label>
        <input v-model="password" type="password" placeholder="******"
          class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
      </div>
      <div>
        <label class=""> Confirm Password </label>
        <input v-model="confirm_password" type="password" placeholder="******"
          class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
      </div>
      <!-- <div class="checkbox">
      <input type="checkbox" id="chekcbox1"  />
      <label for="checkbox1"> I agree to the <a href="#" target="_blank" class="text-blue-600"> Terms and Conditions </a> </label>
    </div> -->
      <div>
        <button class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Create
          Account</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirm_password: '',
    };
  },
  methods: {
    ...mapActions('auth', ['signup']),
    async performSignup() {
      const credentials = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        confirm_password: this.confirm_password
      };

      const success = await this.signup(credentials);

      if (success) {
        // Redirect to the desired route on successful login
        this.$router.push('/home');
      } else {
        alert("Registrasi Gagal");
      }
    },
  },
};
</script>