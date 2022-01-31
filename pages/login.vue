<template>
  <section class="section">
    <button class="button is-primary" @click="loginWithGoogle()" icon-left="google">
      Sign in with Google
    </button>
  </section>
</template>

<script>
export default {
  methods: {
    loginWithGoogle() {
      this.$auth.loginWith("google");
    },
  },
  layout: "empty",
};
</script>

<style></style>
