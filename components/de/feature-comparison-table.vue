<template>
    <feature-comparison-table-body 
    :dataView="dataView"
    :textView="textView"
    :mailMerge="mailMerge"
    :mailMergeToFile="mailMergeToFile"
    :mailMergeToEmail="mailMergeToEmail"></feature-comparison-table-body>
</template>

<script>
export default {
    data: function() {
        const free = true;
        const pro = true;
        const latest = true;
        return {
            dataView: {
                caption: "Daten-Ansicht",
                items: [
                    {
                        caption: 'Daten gruppieren, sortieren und filtrieren',
                        free,
                        pro
                    },
                    {
                        caption: 'Finanz-, Logik-, Text, Mathematik-, Datum & Zeit-Formeln anwenden',
                        free,
                        pro
                    },
                    {
                        caption: 'Bedingte Formeln einsetzen. (Wenn A gleich 0, dann zeige B, sonst zeige C)',
                        free,
                        pro
                    },
                    {
                        caption: 'Passwortschutz für das ganze Dokument oder einzelne Kalkulationstabellen',
                        free,
                        pro
                    },                                                                        
                ],            

            },
            textView: {
                caption: "Text-Ansicht",
                items: [
                    {
                        caption: 'Tabellen, Bilder, Lesezeichen, Hyperlinks und Inhaltverzeichnisse hinzufügen',
                        free,
                        pro
                    },                                                                        
                    {
                        caption: 'Dokument mit Passwort schützen',
                        free,
                        pro
                    },                                                                                                                        
                ],
            },
            mailMerge: {
                caption: "Serienbrief",
                items: [
                    {
                        caption: 'Excel, Word, OpenOffice Dateien als Serienbrief-Vorlage verwenden',
                        free,
                        pro
                    },                                                                        
                    {
                        caption: 'Serienbrief-Vorlage aus einer Online-Datenbank von Edi herunterladen',
                        free,
                        pro
                    },                                                                                                                        
                    {
                        caption: 'Dokument-Felder anhand der Datenquelle automatisch aktualisieren',
                        free,
                        pro
                    },
                    {
                        caption: 'Kein Wasserzeichen "Hergestellt mit Edi FREE"',
                        pro
                    },
                    {
                        caption: 'Bilder dem Serienbrief hinzufügen',
                        pro,
                        latest
                    },
                    {
                        caption: 'Bar-Codes, QR-Codes dem Serienbrief hinzufügen',
                        pro,
                        latest
                    },
                    {
                        caption: 'Links dem Serienbrief hinzufügen, andere Dateien, Webseiten verlinken',
                        pro,
                        latest
                    },
                ],
            },
            mailMergeToFile: {
                caption: "Serienbrief in eine Datei",
                items: [
                    {
                        caption: 'Serienbrief als Pdf, Docx, Doc, Odt, EPub, Mht, Rtf, Xml, Html, Txt erstellen',
                        free,
                        pro
                    },                                                                        
                    {
                        caption: 'Serienbrief als eine einzelne PDF-Datei, mit einer Seite pro Kunde erstellen',
                        free,
                        pro
                    },                                                                                                                        
                    {
                        caption: 'Serienbrief als mehrere PDF-Dateien, mit einem Dokument pro Kunde erstellen',
                        free,
                        pro
                    },
                    {
                        caption: 'Serienbrief Dateien individuell pro Kunde benennen',
                        free,
                        pro
                    },
                    {
                        caption: 'PDF-Dokumente in einem Serienbrief signieren',
                        pro,
                        latest
                    },                    
                    {
                        caption: 'Jede PDF-Datei im Serienbrief mit einem individuellen Passwort pro Kunde verschlüsseln',
                        pro
                    },
                    {
                        caption: 'PDF-Dokumente im Serienbrief wahlweise vor Öffnen oder Modifikation mit einem Passwort schützen',
                        pro
                    },
                    {
                        caption: 'Master-Detail Serienbriefe erstellen (z.B. Rechnung, Speisekarte) ',
                        pro,
                        latest
                    },
                    {
                        caption: 'Serienbriefe mit zusätzlichen Metadaten als xml, json, ini, edifact, yaml für automatische Dokumentverarbeitung erstellen',
                        pro,
                        latest
                    },                                                                                                    
                ],
            },

            mailMergeToEmail: {
                caption: "Serienbrief als Email",
                items: [
                    {
                        caption: 'Personalisierte E-Mails als Serienbrief versenden',
                        free,
                        pro
                    },                                                                        
                    {
                        caption: 'PDF-Dateien als E-Mail Anhang in einem Serienbrief versenden',
                        free,
                        pro
                    },                                                                                                                        
                    {
                        caption: 'Kopie von Serienbrief-Email als Versandnachweis an sich selbst senden (CC, BCC)',
                        free,
                        pro
                    },
                    {
                        caption: 'Verschlüsselte PDF-Dateien per E-Mail in einem Serienbrief versenden',
                        pro
                    },
                    {
                        caption: 'Mehrere Dokument-Anhänge per E-Mail in einem Serienbrief versenden (z.B. Rechnung + Datenschutzrichtlinien)',
                        pro,
                        latest
                    },
                    {
                        caption: 'Mehrere Absender-Indentitäten (FROM) abwechselnd in einem E-Mail Serienbrief verwenden (z.B. Firma A, Firma B, Privat)',
                        pro
                    },
                    {
                        caption: 'Größeren Serienbrief über mehrere E-Mail Server versenden, um SPAM-Einschränkungen eines einzelnen Servers umzugehen',
                        pro
                    },                                                                                            
                ]
            },             
        }
    }
}
</script>

<style scoped>

</style>