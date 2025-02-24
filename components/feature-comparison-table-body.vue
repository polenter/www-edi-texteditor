<template>
  <table class="table-fixed">
      <thead>
        <tr>
          <th class="text-left w-10/12">
            {{ $t('tableLegend') }}
          </th>
          <th class="text-center w-1/12">
            FREE
          </th>
          <th class="text-center w-1/12">
            PRO
          </th>          
        </tr>
      </thead>
      <tbody>
        <tr class="headerRow grey darken-4"><td colspan="3" class="text-center font-semibold">{{ dataView.caption }}</td></tr>
        <tr
          v-for="item in dataView.items"
          :key="item.caption">
          <td>{{ item.caption }}<span v-if="!!item.latest" class="new-feature">{{ $t('new') }}</span></td>
          <td class="icon"><svg-icon v-if="!!item.free" icon="check" /></td>
          <td class="icon"><svg-icon v-if="!!item.pro" icon="check" /></td>          
        </tr>

        <tr class="headerRow grey darken-4"><td colspan="3" class="text-center font-semibold">{{ textView.caption }}</td></tr>
        <tr
          v-for="item in textView.items"
          :key="item.caption">
          <td>{{ item.caption }}<span v-if="!!item.latest" class="new-feature">{{ $t('new') }}</span></td>
          <td class="icon"><svg-icon v-if="!!item.free" icon="check" /></td>
          <td class="icon"><svg-icon v-if="!!item.pro" icon="check" /></td>          
        </tr>

        <tr class="headerRow grey darken-4"><td colspan="3" class="text-center font-semibold">{{ mailMerge.caption }}</td></tr>
        <tr
          v-for="item in mailMerge.items"
          :key="item.caption">
          <td>{{ item.caption }}<span v-if="!!item.latest" class="new-feature">{{ $t('new') }}</span></td>
          <td class="icon"><svg-icon v-if="!!item.free" icon="check" /></td>
          <td class="icon"><svg-icon v-if="!!item.pro" icon="check" /></td>          
        </tr>    

        <tr class="headerRow grey darken-4"><td colspan="3" class="text-center font-semibold">{{ mailMergeToFile.caption }}</td></tr>
        <tr
          v-for="item in mailMergeToFile.items"
          :key="item.caption">
          <td>{{ item.caption }}<span v-if="!!item.latest" class="new-feature">{{ $t('new') }}</span></td>
          <td class="icon"><svg-icon v-if="!!item.free" icon="check" /></td>
          <td class="icon"><svg-icon v-if="!!item.pro" icon="check" /></td>          
        </tr> 

        <tr class="headerRow grey darken-4"><td colspan="3" class="text-center font-semibold">{{ mailMergeToEmail.caption }}</td></tr>
        <tr
          v-for="item in mailMergeToEmail.items"
          :key="item.caption">
          <td>{{ item.caption }}<span v-if="!!item.latest" class="new-feature">{{ $t('new') }}</span></td>
          <td class="icon"><svg-icon v-if="!!item.free" icon="check" /></td>
          <td class="icon"><svg-icon v-if="!!item.pro" icon="check" /></td>          
        </tr>

      </tbody>
  </table>       
</template>

<script>
export default {
    props: ['dataView', 'textView', 'mailMerge', 'mailMergeToFile', 'mailMergeToEmail'],

}
</script>

<style scoped>
td {
  @apply border border-gray-300;
}
tr {
  @apply leading-10;
}

tr:nth-of-type(2n) {
  @apply bg-gray-100;
}

tr>td:first-child {
  @apply pl-2;
}

tr>td:only-child {
  @apply bg-blue-400 text-gray-100;
}

svg {
    width: 1.6em;
    max-width: 1.6em;
    @apply text-blue-500 mx-auto;
}

.new-feature {
  @apply bg-red-600 text-white text-xs px-1 ml-1 rounded;
}

</style>

<i18n lang=yaml>
en:
  tableLegend: 'The table compares features of Edi FREE and Edi PRO'
  new: 'New!'
de:
  tableLegend: 'Vergleich der wichtigsten Eigenschaften von Edi FREE und Edi PRO'
  new: 'Neu!'
</i18n>