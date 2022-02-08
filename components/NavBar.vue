<template>
  <nav id="navbar-main" class="navbar is-fixed-top">

      <div class="navbar-end">
        <div class="navbar-item has-divider">
          <span>Hi, {{ this.$auth.user.name }} </span>
        </div>
        <a
          class="navbar-item"
          title="Log out"
          @click="logout"
        >
          <b-icon icon="logout" custom-size="default" />
          <span>Log out</span>
        </a>
      </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {
      isMenuNavBarActive: false,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('login')
    },
  },
}
</script>
