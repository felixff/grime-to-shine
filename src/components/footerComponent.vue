<template>
  <div class="container__footer">
    <div class="content__footer">
      <div class="section__footer">
        <div class="title__section-footer">Contact</div>
        <div class="contact__footer">Email: email@grimetoshinevaleting.co.uk</div>
        <div class="contact__footer">Call: +44 7902532850</div>
        <div class="contact__footer">Herts – Bucks – Beds</div>
      </div>
      <div class="section__footer">
        <div class="title__section-footer">Follow us</div>
        <div class="socials__footer">Give us a like & follow!</div>
        <div class="socials__footer">Giveaways and deals will be uploaded to our socials.</div>
        <div class="socials__footer">
          <a href="https://facebook.com/GrimeToShineValeting2022/" target="_blank">
            <i class="fab fa-facebook footer__social"></i>
          </a>
          <a href="https://instagram.com/grimetoshine_valeting?igshid=YmMyMTA2M2Y=" target="_blank">
            <i class="fab fa-instagram footer__social"></i>
          </a>
          <a href="https://snapchat.com/add/Grimetashine" target="_blank">
            <i class="fab fa-snapchat footer__social"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">&copy; Copyright 2022, Grime To Shine Valeting | Designed and Built by CoreWeb Solutions</div>
  </div>
</template>

<script>
export default {
  name: "footerComponent"
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 1064px) {
  .container__footer {
    width: 100%;

    .content__footer {
      margin-inline: auto;
      height: 100%;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 20em !important;

      .section__footer {

        .title__section-footer {
        }

        .contact__footer {
        }
      }
    }

    .copyright {
      width: 80% !important;
    }
  }
}

.container__footer {
  height: 100%;
  width: 100%;

  .content__footer {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1em;
    padding: 10px;
    margin-bottom: 1em;

    .section__footer {
      .title__section-footer {
        color: $tertiary-calmer;
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 0.5em;
      }

      .contact__footer {
        color: $tertiary-calmer;


        .footer__social {
          font-size: 1.5rem;
        }
      }

      .socials__footer {
        color: $tertiary-calmer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .footer__social {
          font-size: 1.5rem;
          margin: 0.2em 0.3em 0 0.3em;
        }
      }
    }
  }

  .copyright {
    color: $tertiary-calmer;
    width: 80%;
    margin-inline: auto;
    border-top: groove 1px $tertiary-calmer;
    padding: 2px;
    font-size: 14px;
  }
}
</style>