<template>
  <div v-for="(contact, index) in contacts" :key="index">
    <div>
      <h1>{{ contact }}</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
        tincidunt lorem. Aenean et tortor ac mi sollicitudin viverra.
        Pellentesque mollis lacinia eros, vitae mattis tellus sagittis a.
        Integer vel scelerisque massa. Nam eu convallis sem. Donec mauris arcu,
        ultrices nec augue ut, semper molestie eros. Sed et magna velit. In
        sagittis aliquam elit, tincidunt blandit purus porta in. Nam hendrerit
        accumsan ante ac blandit. Quisque odio purus, consectetur quis nibh id,
        sodales ornare ipsum. Donec vitae pretium libero.
      </div>
    </div>
    <img src="" alt="Contact Image" />
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  props: {
    "contacts" : {
      default: [ 'Test' ]
    }
  },
};
</script>

<style scoped lang="scss"></style>
