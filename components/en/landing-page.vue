<template>
  <div class="container mx-auto">
    <div class="landing-viewport min-h-screen flex flex-col justify-around">

        <!-- title -->    
        <page-header title="Edi - Texteditor" subtitle="The easiest way to mail merge"></page-header>        

        <!-- subtitle -->        
        <feature-row class="mt-10">
          <template #text>Create in minutes, <br class="hidden sm:inline lg:hidden" /> perfectly formatted PDF serial letters,<br/> using only a single program.</template>
          <template #cta><nuxt-link :to="`/${$i18n.locale}/download`" class="cta-button my-4">Download for free</nuxt-link></template>
          <template #image><home-carousel :items="items" class="border" width="670"></home-carousel></template>
        </feature-row>


      <!-- awards -->
      <edi-awards class="mt-8 container mx-auto"></edi-awards>

    </div>

    <page-subheader title="Privacy by Design" subtitle="Manage customer data according to GDPR" class="my-10 lg:my-20"></page-subheader>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
      <feature-card icon="briefcase-download-outline">Install as a desktop application, <br />on your local computer.</feature-card>
      <feature-card icon="cloud-off-outline">Store customers data locally, <br />no cloud storage involved. </feature-card>
      <feature-card icon="shield-check-outline">Use trusted document formats <br />(doc, dox, odt, xls, xlsx).</feature-card>
      <feature-card icon="lock-check-outline">Encrypt and sign <br />each PDF document.</feature-card>
      <feature-card icon="file-tree-outline">Mail merge Master-Detail <br />reports, invoices. </feature-card>
      <feature-card icon="email-multiple-outline">Send CC, BCC email copy <br />at yourself for evidence. </feature-card>
      <alert-info class="col-span-1 sm:col-span-2 lg:col-span-3">According to the GDPR, there is <br class="sm:hidden" /><strong>no data processing agreement (DPA) required</strong> to mail merge with Edi</alert-info>      
    </div>    

<!-- Ease of use -->
    <page-subheader title="Ease of Use" subtitle="Create beautiful serial letters in minutes" class="my-10 lg:my-20"></page-subheader>

    <div class="container mx-auto space-y-20">
      <feature-row>
        <template #text>Define the serial letter data, as a table in the data view. <br/>You can import your existing Excel documents.</template>
        <template #image>
          <feature-row-image src="/images/en/home/edi-200.png" alt="Data View of Edi-Texteditor" title="Data View" width="670"></feature-row-image>
        </template>
      </feature-row>
      <feature-row :invertcolumns="true">
        <template #text>Switch to the text view and drag the table columns onto your document.<br />Use your own Word or OpenOffice documents as templates.</template>
        <template #image>
          <feature-row-image src="/images/en/home/edi-300.png" alt="Text View of Edi-Texteditor" title="Text View" width="670"></feature-row-image>
        </template>
      </feature-row>
      <feature-row>
        <template #text>Mail merge into multiple PDF documents, <br/>naming and encrypting each PDF file individually</template>
        <template #image>
          <feature-row-image src="/images/en/home/edi-500.png" alt="Mail merge into multiple files" title="Mail Merge" width="670"></feature-row-image>
        </template>
      </feature-row>
      <feature-row :invertcolumns="true">
        <template #text>Download additional mail merge templates <br>from the online repository.</template>
        <template #image>
          <feature-row-image src="/images/en/home/edi-100.png" alt="Download mail merge template from the online repository" title="Mail Merge Templates" width="670"></feature-row-image>
        </template>
      </feature-row>
    </div>


<!-- free -->
    <page-subheader title="Free" subtitle="Mail Merge completely for free" class="my-10 lg:mt-20"></page-subheader>

  <div class="container mx-auto">        
      <div class="text-center leading-10">
        <p>You may use Edi FREE without registration and without any obligations at no cost, as long as you wish, even for commercial purposes.</p>
        <p>With Edi FREE you can mail merge into multiple PDF files and send them as an email.</p>
        <p>In case, more functionality is needed - you can upgrade to Edi PRO.</p>
      </div>        
      <div class="free-card mx-auto border px-14 py-4 mt-8 shadow-lg rounded-lg">
        <div class="feature-list leading-10">
          <p class="text-gray-600">Edi FREE</p>
          <ul>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>no registration</li>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>no time restriction</li>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>even for business</li>
          </ul>
          <p class="text-gray-600 mt-4">Edi PRO</p>
          <ul>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>pay once</li>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>use lifelong</li>
          </ul>
        </div>
          <nuxt-link :to="`/${$i18n.locale}/download`" class="cta-button mt-6 mb-4">Download for free</nuxt-link>
      </div>
  </div>

  </div>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: '/images/en/home/edi-100.png',
            alt: 'Download mail merge template from the online repository'
          },
          {
            src: '/images/en/home/edi-200.png',
            alt: 'Data view of Edi-Texteditor'
          },
          {
            src: '/images/en/home/edi-300.png',
            alt: 'Text view of Edi-Texteditor'
          },
          {
            src: '/images/en/home/edi-400.png',
            alt: 'Show mail merge preview'
          },
          {
            src: '/images/en/home/edi-500.png',
            alt: 'Mail merge into multiple files'
          },          
        ]
      }
    }, 
}
</script>

<style scoped>
.free-card {
  width: max-content;
}
.alert-content {
  width: 100%;
}
</style>