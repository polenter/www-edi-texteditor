<template>
    <div class="older-versions" v-bind="$attrs">
        <div v-if="!showOlderVersions" @click="requestOlderVersions" class="cursor-pointer text-blue-700">{{ $t('olderVersions') }}...</div>
        <div v-else>
            <a href="/EdiSetup.exe">Edi 2.8</a> <span class="text-xs text-gray-600">({{ $t('net452required') }})</span><br/>
            <a href="/edi-texteditor.zip">Edi 2.8 portable.zip</a> <span class="text-xs text-gray-600">({{ $t('net452required') }})</span>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            showOlderVersions: false
        }
    },
    methods: {
        requestOlderVersions() {
            this.showOlderVersions = true
        }
    }
}
</script>

<style>

</style>

<i18n lang=yaml>
en:
    olderVersions: "Older versions"
    net452required: ".NET 4.7.2 required"
de:
    olderVersions: "Ältere Versionen"
    net452required: ".NET 4.7.2 vorausgesetzt"    
</i18n>