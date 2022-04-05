<template>
  <div class="nav-bar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">Services</router-link>
      <router-link to="/services">About Us</router-link>
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
        <a href="#booking">Book Now</a>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
html {
  background-color: $background-primary;
}

#app {
  background-color: $background-primary;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.nav-bar {
  position: sticky;
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr;
  grid-template-rows: 8em;

  nav {
    grid-column: 1;
    display: flex;
    margin-left: 5em;
    justify-content: center;
    align-items: center;
    gap: 1.5em;

    a {
      color: $secondary;
      font-family: Grafitty, sans-serif;
      font-size: 1.5rem;
      font-weight: bolder;

      &:hover {
        color: $primary;
      }

      &.router-link-exact-active {
        color: $primary;
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
          color: $primary !important;
          cursor: pointer;
        }
      }
    }

    a {
      font-size: 2rem;
      color: $secondary;
      font-weight: bolder;

      &:hover {
        cursor: pointer;
        color: $primary;
      }
    }
  }
}
</style>
