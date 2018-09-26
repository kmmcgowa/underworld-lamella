module.exports = {
  outputDir: process.env.OUTPUT_DIR,
  baseUrl: process.env.BASE_URL,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss";`
      }
    }
  }
}
