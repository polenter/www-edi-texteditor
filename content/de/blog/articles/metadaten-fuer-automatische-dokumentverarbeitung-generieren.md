---
title: Wie Metadaten für die automatische Dokumentverarbeitung generieren?
subtitle: Serienbriefe mit Metadaten erweitern um die Dokumente automatisch verarbeiten zu können
description: Edi - Texteditor kann generierte Serienbriefe mit Metadaten erweitern um die Dokumente automatisch verarbeiten zu können.
updatedAt: 2021-05-08
trans:
    en:
        slug: create-metadata-for-automatic-document-processing
---

Seit der v.3.9 kann Edi - Texteditor jedes generierte Dokument im Serienbrief, mit Metadaten erweitern.

Die Metadaten beschreiben die generierten Dokumente in einem verständlichen für Maschinen Format.

Die Erweiterung von Serienbriefen um Metadaten ermöglicht die automatische Dokumentverarbeitung, von externen Anwendungen oder Geschäftsprozessen.

<div class="my-10">
    <alert-info>
    Durch die Verwendung von Metadaten können Ihre Dokumente automatisch indexiert, archiviert, oder z.B. versendet per Email von anderen Web-Services werden.
    </alert-info>
</div>


Edi fügt Metadaten als zusätzliche Text-Dateien, zu jedem generierten Dokument und er verwendet dabei seine Serienbrief-Felder als Datenquelle.

<img-view src="/images/de/blog/metadaten-fuer-automatische-dokumentverarbeitung-generieren/mehrere-pdf-dateien-mit-serienbrief-metadaten.png" 
            srcquery="width=500"
            alt="Mehrere PDF-Dateien mit zusätzlichen Serienbrief-Metadaten"
            link></img-view>

Nach der Auswahl von `xml`, `json` oder `ini` als Typ der Metadaten, werden alle Serienbrief-Felder automatisch, im ausgewählten Format präsentiert.

<img-view src="/images/de/blog/metadaten-fuer-automatische-dokumentverarbeitung-generieren/alle-serienbrief-felder-als-metadaten-generieren.png" 
            srcquery="width=500"
            alt="Alle Serienbrief-Felder dem Metadaten-Editor hinzufügen"
            link></img-view>


Überdies können Sie Ihre eigenen Metadaten-Dateien entwerfen, z.B. `edifact` oder `yaml`, indem Sie die Serienbrief-Felder manuell dem Metadaten-Editor hinzufügen.

<img-view src="/images/de/blog/metadaten-fuer-automatische-dokumentverarbeitung-generieren/serienbrief-feld-als-metadaten-hinzufuegen.png" 
            srcquery="width=500"
            alt="Ein Serienbrief-Feld dem Metadaten-Editor hinzufügen"
            link></img-view>

<div class="my-10">
    <alert-info>
    Erstellen Sie in der Daten-Ansicht, zusätzliche Spalten für Ihre Metadaten und formatieren Sie diese nach Ihrem Bedarf.
    </alert-info>
</div>