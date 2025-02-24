export default function (context) {

    return {
        fetchAllArticlesAsync: function() {
            return this.queryAllArticlesAsync().fetch()
        },

        queryAllArticlesAsync: function() {
            const lang = context.app.i18n.locale
            const content = context.$content

            return content(`${lang}/blog/articles`)
            .only(['title', 'subtitle', 'slug', 'updatedAt'])
            .without('body')
            .sortBy('updatedAt', 'desc')
        },

        /**
         * 
         * @param {String} slug 
         */
        queryArticleAsync(slug) {
            const lang = context.app.i18n.locale
            const content = context.$content
            
            return content(`${lang}/blog/articles`, slug)
        },

        /**
         * 
         * @param {String} slug 
         * @returns {Promise<[prev, next]>}
         */
        queryPreviousNextAsync: function(slug) {
            return this.queryAllArticlesAsync()
            .surround(slug)
        }

    }
}