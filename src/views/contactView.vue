<template>
  <div class="container__contact">
    <div class="contact-wrapper">
      <div class="contact-info">
        <div class="contact-instance">
          <div class="contact-label">Email:</div>
          <div class="contact">placeholder@grimetoshine.co.uk</div>
        </div>
        <div class="contact-instance">
          <div class="contact-label">Telephone:</div>
          <div class="contact">+44 7XXXXXXXXX</div>
        </div>
        <div class="contact-instance">
          <div class="contact-label">Address:</div>
          <div class="contact">Placeholder Street, Placeholder Town, Placeholder Postcode</div>
        </div>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.6044407667714!2d1.1342398159285305!3d52.068725827326254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9a1b7f3e60247%3A0xa159aeb8728bffee!2sNorwich%20Rd%2C%20Ipswich%20IP1%204HD!5e0!3m2!1sen!2suk!4v1649322353945!5m2!1sen!2suk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="contact-form">
        <div class="contact-details">
          <label for="name" class="required">Name</label>
          <input type="text" id="name" class="contact-input" maxlength="50">
          <label for="telephone">Telephone</label>
          <input type="text" id="telephone" maxlength="13" class="contact-input">
        </div>
        <label for="email" class="required">Email</label>
        <input type="text" id="email" class="contact-input" maxlength="80">
        <label for="subject" class="required">Subject</label>
        <input type="text" id="subject" maxlength="100" class="contact-input">
        <label for="message" class="required">Message</label>
        <input type="text" id="message" maxlength="500" class="contact-input">
        <button type="submit" class="text-white font-bold py-1 px-5 rounded" @click.prevent="sendEmail()">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactView",
  components: {},
  data() {
    return {}
  },
  methods: {
    sendEmail() {

    }
  }
};
</script>
<style lang="scss" scoped>
.container__contact {
  max-width: 60%;
  height: 100vh;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  color: $tertiary;
  font-size: 1rem;
  text-align: left;
  flex-wrap: wrap;

  .contact-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2.5em;

    .contact-info {
      display: flex;
      gap: 1.5em;
      flex-direction: column;

      .contact-label {
        font-size: 1.2rem;
      }

      .map {
        iframe {
          border-radius: 10px;
          width: 100%;
        }
      }
    }

    .contact-form {
      padding: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 2;
      gap: 1em;
      box-shadow: 0 4px 8px 0 rgba(245, 245, 245, 0.2);
      border-radius: 5px;
      color: $primary;
      flex-wrap: wrap;

      button {
        background-color: $secondary;


        &:hover {
          background-color: $tertiary;
          color: $primary;
        }
      }

      label {
        color: $tertiary;
      }

      .contact-details {
        display: flex;
        gap: 0.5em;

        .contact-input {
          width: auto;
          border-radius: 5px;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
        }

        label {
          color: $tertiary;
          margin-right: 0.5em;
        }
      }

      .contact-input {
        width: 97%;
        border-radius: 5px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
      }

      .required {
        &:after {
          content: " *";
          color: red;
        }
      }

      #name {

      }

      #email {

      }

      #telephone {

      }

      #subject {

      }

      #message {
        height: 10em;
      }
    }
  }
}
</style>
