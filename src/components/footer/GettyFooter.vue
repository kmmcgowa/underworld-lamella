<template>
  <footer id="page-footer">
    <div class="inner-wrapper">
      <a href="http://www.getty.edu" target="_blank" class="getty-trust"><img src="@/assets/getty-logo-reverse.gif" alt="The J. Paul Getty Trust" class="getty-logo"/> The J. Paul Getty Trust</a>
      <div id="copyright">
        &copy; J. Paul Getty Trust. <span class="divider">|</span> <a href="http://www.getty.edu/legal/privacy.html">Privacy Policy</a> <span class="divider">|</span> <a href="http://www.getty.edu/legal/copyright.html">Terms of Use</a> <span class="divider">|</span> <a href="http://www.getty.edu/about/contact_us.html">Contact Us</a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'GettyFooter'
  }
</script>

<style lang="scss" scoped>
  #page-footer {
    font-family: 'Avenir Next W01', 'Avenir Next', 'Avenir', Helvetica, sans-serif;
    box-sizing: border-box;
    background: #f1f1f1;
    border-top: 3px solid #000000;
    color: #333333;

    .inner-wrapper {
      padding: 1.5rem 1.25rem 2.5rem;
      min-height: 0;
    }

    /* Getty Trust Logo -------------------- */

    a.getty-trust {
      display: inline-block;
      margin: 0 0 .9rem 0;
      font-size: 14px;
      font-weight: 500;

      img {
        width: 2.1125rem;
        height: auto;
        margin: 0 .25rem -0.25rem 0;
      }

      &:link,
      &:visited { color: #333333; text-decoration: none; }
      &:hover,
      &:active  { color: #cccccc; }

    }

    #copyright {
      font-size: 11px;
      font-weight: 400;
      color: #333333;

      a:link,
      a:visited { color: #333333; text-decoration: none; }
      a:hover,
      a:active  { color: #cccccc; text-decoration: underline; }

      .divider {
        color: #999999;
        margin: 0 3px;
      }
    }

    /* Adjustments for larger devices -------------------- */

    @media #{$tablet-up} {

      // NOTE: Need to force a fixed height on the page-footer so that we can position the Main
      // Audio Player on the Stop Detail page so that it rests right on top of the footer.
      height: 144px;
      max-height: 144px;
      min-height: 144px;

      .inner-wrapper {
        padding: 1.5rem 1.9rem 2.375rem;
      }

      a.getty-trust {
        font-size: 16px;
        img {
          width: 2.4375rem;
          height: auto;
          margin: 0 .3rem -0.35rem 0;
        }

      }
      #copyright {
        font-size: 12px;
      }
    }
  }
</style>
