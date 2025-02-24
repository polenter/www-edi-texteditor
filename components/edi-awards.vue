<template>
<div class="edi-awards">
    <div class="max-w-prose mx-auto">
        <p class="italic">"Edi - Text Editor" has been tested in the Softpedia labs using several industry-leading security 
            solutions and found to be completely clean of adware/spyware components. 
            We are impressed with the quality of your product and encourage you 
            to keep these high standards in the future."
        </p>
        <p class="text-right">Softpedia labs</p>
    </div>
    <div class="flex flex-wrap items-center justify-center mt-4 space-x-2">
        <img v-for="image in images" :key=image :src="`/images/awards/${image}`" :alt="$t(image)" class="shadow-md" />
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            images: [
                '5sterne.gif',
                'Edi_-_Text_Editor_award2.png',
                'pick_100.gif',
                'rating5.png',
                'review2_5_Edi_award.png',
                'softpedia_clean_award_f.gif',
            ]
        }
    }
}
</script>

<style scoped>

</style>

<i18n lang=yaml>
en:
    "5sterne.gif": "5 stars for Edi-Texteditor on download-tipp"
    "Edi_-_Text_Editor_award2.png": "5 star award for Edi-Texteditor on findmysoft"
    "pick_100.gif": "Editors pick for Edi-Texteditor on Brothersoft"
    "rating5.png": "Edi-Texteditor is excellent on download 3000"
    "review2_5_Edi_award.png": "Edi is essential says Findmysoft review"
    "softpedia_clean_award_f.gif": "Edi-Texteditor is certified by softpedia, it contains no spyware, no adware, no viruses and it is 100% clean"
de:
    "5sterne.gif": "5 Sterne für Edi-Texteditor auf download-tipp"
    "Edi_-_Text_Editor_award2.png": "5 Sterne Auszeichnung für Edi-Texteditor auf findmysoft"
    "pick_100.gif": "Editors pick für Edi-Texteditor auf Brothersoft"
    "rating5.png": "Edi-Texteditor ist excellent auf download 3000"
    "review2_5_Edi_award.png": "Edi ist essential laut Findmysoft-Review"
    "softpedia_clean_award_f.gif": "Edi-Texteditor ist zertifiziert von softpedia, es enthält keine spyware, keine Adware, keine Virusen und es ist 100% sauber"
</i18n>