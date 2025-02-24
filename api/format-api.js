export default function() {
    return {
        formatLocaleDate(value) {
            return new Date(value).toLocaleDateString()
        }        
    }

}