<template>
  <div id="app">
    <div class="navbar">
      <div
        v-if="alwaysVisible === false"
        class="burger-menu"
        @click="hideNavbar()"
      >
        <i class="fas fa-bars"></i>
      </div>
      <nav
        :class="{
          'navbar-not-visible': hideAway && alwaysVisible === false,
          'full-screen-navbar': windowWidthInternal < 1000,
          'navbar-visible': navbarHidden === false,
        }"
      >
        <div v-if="closed === false" class="close-button" @click="closeMenu">
          <i class="fas fa-times close"></i>
        </div>
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <div class="logo">
        <img src="@/assets/img/grime-to-shine-logo.png" alt="Company Logo" />
      </div>
      <div class="book-socials">
        <div class="socials">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
        </div>
        <div class="book">
          <a href="#booking-system">Book Now</a>
        </div>
      </div>
    </div>
    <router-view />
    <footer>
      <small style="position: absolute; left: 0"
        >Copyright &copy; 2022, GrimeToShine</small
      >
    </footer>
  </div>
</template>
<script>
export default {
  mounted() {
    this.windowWidthInternal = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      window.addEventListener("scroll", this.onScroll);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      navbarHidden: false,
      closed: true,
      scrolled: false,
      windowWidthInternal: 0,
      lastKnownScrollPosition: 0,
    };
  },
  computed: {
    alwaysVisible() {
      return this.windowWidthInternal >= 1000;
    },
    hideAway() {
      return this.windowWidthInternal < 1000 && this.closed === true;
    },
  },
  methods: {
    hideNavbar() {
      this.closed = !this.closed;
    },
    onResize() {
      this.windowWidthInternal = window.innerWidth;
      if (this.windowWidthInternal < 1000) {
        this.navbarHidden = true;
      } else {
        this.closed = true;
      }
    },
    onScroll() {
      this.lastKnownScrollPosition = window.scrollY;
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.$store.commit('saveScrollPosition', this.lastKnownScrollPosition);
          this.stickMenu();
          this.ticking = false;
        });

        this.ticking = true;
      }
    },
    closeMenu() {
      this.closed = !this.closed;
    },
    stickMenu() {
      this.scrolled = this.lastKnownScrollPosition < 1;
    }
  },
};
</script>
<style lang="scss">
#app {
  background-color: $primary;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  scroll-behavior: smooth;
}

.navbar {
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr;
  grid-template-rows: 8em;
  background-color: rgba(0, 0, 0, 1);
  z-index: 10;

  .burger-menu {
    color: $secondary;
    font-size: 3rem;
    z-index: 11;
    position: fixed;
    left: 0;
    top: 0;
    transform: translate(20%, 10%);

    &:hover {
      cursor: pointer;
    }
  }

  .full-screen-navbar {
    z-index: 99;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
    position: fixed;
    top: 0;
    left: 0;
    margin: 0 !important;
  }

  .navbar-visible {
    transform: translateX(0) !important;
  }
  .navbar-not-visible {
    transform: translateX(-100%) !important;
  }

  .close-button {
    position: absolute;
    z-index: 9999;
    margin: 2em;
    top: 1em;
    right: 1em;
    &:hover {
      cursor: pointer;
    }

    .close {
      font-size: 2rem;
      color: $secondary;
    }
  }

  nav {
    grid-column: 1;
    display: flex;
    margin-left: 5em;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    transition: transform 0.2s ease-in;

    a {
      color: $secondary;
      font-family: Grafitty, sans-serif;
      font-size: 1.8rem;
      //font-weight: bolder;

      &:hover {
        color: $tertiary;
      }

      &.router-link-exact-active {
        color: $tertiary;
      }
    }
  }

  .logo {
    grid-column: 2;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    img {
      max-height: 80%;
    }
  }

  .book-socials {
    grid-column: 3;
    color: $secondary;
    font-family: Grafitty, sans-serif;
    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .socials {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8em;
      font-size: 1.5rem;

      svg {
        &:hover {
          color: $tertiary !important;
          cursor: pointer;
        }
      }
    }

    a {
      font-size: 2.2rem;
      color: $secondary;
      //font-weight: bolder;

      &:hover {
        cursor: pointer;
        color: $tertiary;
      }
    }
  }
}
</style>
