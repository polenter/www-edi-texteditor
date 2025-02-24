import blog from '~/api/blog-api'
import format from '~/api/format-api'

export default function(context) {
    return {
        blog: new blog(context),
        format: new format()
    }
}