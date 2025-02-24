export default {
    head() {
        return {
            titleTemplate: this.article.titleTemplate ?? '%s - Edi-Texteditor',
            title: this.article.title,
            htmlAttrs: {
                lang: this.$i18n.locale
            },
            meta: [
                {
                  hid: "description",
                  name: "description",
                  content: this.article.description,
                },
                // Facebook
                { 
                  property: "og:site_name", 
                  content: `${this.$config.websiteTitle}` },
                { 
                  hid: "og:type", 
                  property: "og:type", 
                  content: "website" },
                {
                  hid: "og:url",
                  property: "og:url",
                  content: `${this.$config.websiteUrl}${this.$route.fullPath}`,
                },
                {
                  hid: "og:title",
                  property: "og:title",
                  content: this.article.title,
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: this.article.description,
                },
                {
                  hid: "og:image",
                  property: "og:image",
                  content: "/images/avery-lewis-hkBBT836Xhg-unsplash.panorama.2400x1256.jpg",
                },
                { 
                  property: "og:image:width", 
                  content: "2400" },
                { 
                  property: "og:image:height", 
                  content: "1256" 
                },
                // Twitter
                { 
                  name: "twitter:site", 
                  content: "@polenter1" 
                },
                { 
                  name: "twitter:card", 
                  content: "summary_large_image" },
                {
                  hid: "twitter:url",
                  name: "twitter:url",
                  content: `${this.$config.websiteUrl}${this.$route.fullPath}`,
                },
                {
                  hid: "twitter:title",
                  name: "twitter:title",
                  content: this.article.title,
                },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: this.article.description,
                },
                {
                  hid: "twitter:image",
                  name: "twitter:image",
                  content: "/images/avery-lewis-hkBBT836Xhg-unsplash.panorama.2400x1256.jpg",
                }
              ],
              link: [
                {
                  hid: "canonical",
                  rel: "canonical",
                  href: `${this.$config.websiteUrl}${this.$route.fullPath}`,
                },
              ]
        }
    }    
}