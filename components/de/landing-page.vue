<template>
  <div class="container mx-auto">
    <div class="landing-viewport min-h-screen flex flex-col justify-around">

        <!-- title -->    
        <page-header title="Edi - Texteditor" subtitle="Der schnellste Weg zu einem Serienbrief"></page-header>        

        <!-- subtitle -->        
        <feature-row class="mt-10">
          <template #text>Perfekt formatierte PDF Serienbriefe binnen Minuten erstellen,<br/> mit nur einem Programm.</template>
          <template #cta><nuxt-link :to="`/${$i18n.locale}/download`" class="cta-button my-4">Kostenlos herunterladen</nuxt-link></template>
          <template #image><home-carousel :items="items" class="border" width="670"></home-carousel></template>
        </feature-row>


      <!-- awards -->
      <edi-awards class="mt-8 container mx-auto"></edi-awards>

    </div>

    <page-subheader title="Datenschutz durch Technik" subtitle="Kundendaten konform zu DSGVO verwalten" class="my-10 lg:my-20"></page-subheader>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
      <feature-card icon="briefcase-download-outline">Als eine Desktop-Anwendung,<br/> auf dem lokalen Rechner installieren.</feature-card>
      <feature-card icon="cloud-off-outline">Kundendaten lokal speichern,<br/> kein Cloud-Speicher benötigt.</feature-card>
      <feature-card icon="shield-check-outline">Bewährte Dokument-Formate verwenden<br class="hidden xl:inline"/> (doc, dox, odt, xls, xlsx).</feature-card>
      <feature-card icon="lock-check-outline">Jedes PDF-Dokument<br/> verschlüsseln und signieren.</feature-card>
      <feature-card icon="file-tree-outline">Master-Detail<br/> -Reports/-Rechnungen erstellen.</feature-card>
      <feature-card icon="email-multiple-outline">Versand-Nachweis als CC, BCC<br/> an sich selbst senden.</feature-card>
      <alert-info class="col-span-1 sm:col-span-2 lg:col-span-3">Gemäß DSGVO, wird<br class="sm:hidden"/> <strong>kein Auftragsverarbeitungsvertrag benötigt</strong> um Serienbriefe mit Edi zu erstellen.</alert-info>      
    </div>    

<!-- Ease of use -->
    <page-subheader title="Einfache Bedienung" subtitle="Wunderschöne Serienbriefe im Minutentakt erstellen" class="my-10 lg:my-20"></page-subheader>

    <div class="container mx-auto space-y-20">
      <feature-row>
        <template #text>Serienbrief-Daten als eine Tabelle, in der Daten-Ansicht definieren.<br/> Eigene Excel-Dokumente als Quelle wiederverwenden.</template>
        <template #image>
          <feature-row-image src="/images/de/home/edi-200.png" alt="Daten-Ansicht von Edi-Texteditor" title="Daten-Ansicht" width="670"></feature-row-image>
        </template>
      </feature-row>
      <feature-row :invertcolumns="true">
        <template #text>In die Text-Ansicht umschalten und die Tabellen-Spalten auf dem Dokument positionieren.<br/> Eigene Word- und OpenOffice-Dokumente als Quelle wiederverwenden. </template>
        <template #image>
          <feature-row-image src="/images/de/home/edi-300.png" alt="Text-Ansicht von Edi-Texteditor" title="Text-Ansicht" width="670"></feature-row-image>
        </template>
      </feature-row>
      <feature-row>
        <template #text>Serienbrief in mehrere PDF-Dokumente erstellen,<br/> dabei jede PDF-Datei individuell benennen und verschlüsseln.</template>
        <template #image>
          <feature-row-image src="/images/de/home/edi-500.png" alt="Serienbrief in mehrere Dateien erstellen" title="Serienbrief" width="670"></feature-row-image>
        </template>
      </feature-row>
      <feature-row :invertcolumns="true">
        <template #text>Zusätzliche Serienbrief-Vorlagen nach Bedarf herunterladen.</template>
        <template #image>
          <feature-row-image src="/images/de/home/edi-100.png" alt="Serienbrief-Vorlage herunterladen" title="Serienbrief-Vorlagen" width="670"></feature-row-image>
        </template>
      </feature-row>
    </div>


<!-- free -->
    <page-subheader title="Kostenlos" subtitle="Serienbriefe absolut kostenlos erstellen" class="my-10 lg:mt-20"></page-subheader>

  <div class="container mx-auto">        
      <div class="text-center leading-10">
        <p>Edi FREE dürfen Sie ohne Registrierung und ohne jegliche Verpflichtung kostenlos für unbegrenzte Zeit nutzen, egal ob kommerziell oder privat.</p>
        <p>Mit Edi FREE können Sie Ihren Serienbrief als mehrere PDF-Dateien speichern und diese als E-Mail versenden.</p>
        <p>Wünschen Sie noch mehr Funktionen, so können Sie Edi PRO erwerben.</p>
      </div>
      <div class="free-card mx-auto border px-14 py-4 mt-8 shadow-lg rounded-lg">
        <div class="feature-list leading-10">
          <p class="text-gray-600">Edi FREE</p>
          <ul>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>ohne Registrierung</li>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>ohne Zeiteinschränkung</li>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>auch kommerziell nutzen</li>
          </ul>
          <p class="text-gray-600 mt-4">Edi PRO</p>
          <ul>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>einmal bezahlen</li>
            <li><svg-icon icon="checkbox-marked-circle" class="w-6 inline-block text-blue-400 mr-8"></svg-icon>lebenslang nutzen</li>
          </ul>
        </div>
          <nuxt-link :to="`/${$i18n.locale}/download`" class="cta-button mt-6 mb-4">Kostenlos herunterladen</nuxt-link>
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
            src: '/images/de/home/edi-100.png',
            alt: 'Serienbrief-Vorlage herunterladen'
          },
          {
            src: '/images/de/home/edi-200.png',
            alt: 'Daten-Ansicht von Edi-Texteditor'
          },
          {
            src: '/images/de/home/edi-300.png',
            alt: 'Text-Ansicht von Edi-Texteditor'
          },
          {
            src: '/images/de/home/edi-400.png',
            alt: 'Serienbrief-Vorschau erstellen'
          },
          {
            src: '/images/de/home/edi-500.png',
            alt: 'Serienbrief in mehrere Dateien erstellen'
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


</style>