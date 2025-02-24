---
title: Download
subtitle: Edi herunterladen
description: Edi - Texteditor FREE herunterladen und kostenlos verwenden, sogar für kommerzielle Zwecke.
---

<h2 class="mb-4">Dateien</h2>

<markdown-link href="/edi-texteditor-setup-v3.103.exe"><strong>edi-texteditor-setup-v3.103.exe</strong></markdown-link>

<span class="text-sm text-gray-600">vom 23.09.2023 (.NET 4.7.2 vorausgesetzt - normalerweise Bestandteil von Windows)</span>

<div class="my-10">
  <alert-info>
    Es gibt nur einen Hybrid-Installer für Edi FREE sowie Edi PRO und Deutsch-/Englisch-Sprachversion.
  </alert-info> 
</div>

<markdown-link href="/edi-texteditor-v3.103.zip">Edi 3.103 portable.zip</markdown-link> <span class="text-sm text-gray-600">(.NET 4.7.2 vorausgesetzt)</span><br/>

<download-older-versions class="text-sm mt-8"></download-older-versions>



## System-Anforderungen

Ein Rechner mit dem 32- bzw. 64-Bit Betriebssystem:

- Windows 10
- Windows 8.x
- Windows 7

Edi basiert auf .NET Framework 4.7.2 was Bestandteil von Windows 10 ist. Das .NET Framework wird als empfohlenes Windows Update angeboten

## Änderungshistorie

#### v.3.103
- Die Bibliothek für die Serienbrief-Erstellung wurde aktualisiert.

#### v.3.102
- neu: Durch Einführung von MERGEBARCODE ist die Generieriung von Bar-Codes sowie QR-Codes in PRO möglich.
- neu: Durch Einführung von INCLUDEPICTURE ist die Generierung von Bildern in PRO möglich.
- neu: Generierung von Links, z.B. in PDF-Dokumenten ist in PRO möglich.
- neu: Nacheinanderfolgende `_` Zeichen werden beim Ersetzen von ungültigen Zeichen, durch *SuppressCompressingUnderscores*, in Dateinamen nicht reduziert.
- fix: Die Fehlermeldung *Objektverweis wurde nicht auf eine objektinstanz festgelegt* wird nicht mehr beim Versand von Emails präsentiert
- fix: Keine Fehlernachricht *Ein Eintrag mit demselben Schlüssel existiert bereits*, für Kopfzellen mit demselben Text, aber unterschiedlicher Schreibweise (Groß/Klein).
- fix: Keine *InvalidPrinterException* wenn kein Drucker installiert ist.

#### v.3.95
- fix: Text einer HTML-Nachricht war nicht explizit als UTF-8 kodiert.
- fix: Im Inhaltverzeichnis wurden die Seitennummer nicht präsentiert.

#### v.3.93
- neu: Neue Taste `Leere Zeile aus obenstehender kopieren` in der Daten-Ansicht.
- fix: Formatierung in Master-Detail wurde optimiert.

#### v.3.91

- fix: Auto-Update hat die verfügbare Version, in bestimmten Situationen falsch erkannt.

#### v.3.10

- neu: Nach der Auswahl von xml, json oder ini als Metadaten-Erweiterung, werden alle Serienbrief-Felder dem Metadaten-Editor automatisch hinzugefügt.

#### v.3.9

- neu: PDF-Dokumente können mit einem X.509-Zertifikat signiert werden.
- neu: Zusätzliche Metadaten-Dateien, z.B. xml, json, ini, edifact können für automatische Dokument-Verarbeitung erstellt werden.

#### v.3.5

- fix: nach der automatischen Generierung des Email-Anhang-Musters waren die Datei-Anhänge nicht immer erkannt.
- fix: bestimmte Zeichen wurden im PDF-Passwort gegen Unterstriche ausgetauscht.

#### v.3.4

- fix: Leere Zelle wird ausschließlich im Master-Detail-Modus aus der vorherigen übernommen.

#### v.3.3

- fix: ein Fehler passiert, wenn Detail-Felder in einer Auflistung definiert sind.

#### v.3.2

- neu: Es ist optional möglich ausschließlich die ausgewählten Zeilen aus der Kalkulationstabelle zu drucken.
- fix: Die Fehlermeldung: "Angegebene Dokumentposition oder Bereich gehört zu einem anderen Dokument.." wurde angezeigt, wenn die Kopf-/Fußzeile angeklickt wurde.

#### v.3.0

- neu: Master-Detail-Report
- neu: Mehrere Dokument-Anhänge per E-Mail
- neu: Komplett neues Installationspaket
- neu: Kommunikation mit unsicheren, firmeninternen E-Mail Servern wird optional geduldet

#### v.2.8

- fix: Portnummer wurde immer zu 25 im Editor von SMTP-Server zurückgesetzt

#### v.2.7

- neu: Dokumente können per E-Mail als Anhang versendet werden
- neu: Mehrere E-Mail Empfänger können definiert werden (CC, BCC)
- neu: Feld-Namen und Werte werden automatisch ausgewählt
- neu: Polnische Sprachversion

#### v.2.5

- neu: PDF-Dokumente können verschlüsselt werden
- neu: E-Mail-Kommunikation wird über TLS/SSL verschlüsselt

#### v.2.4

- neu: Dokument-Vorlagen können per Tastendruck aus einer Online-Datenbank heruntergeladen werden.
- neu: Serienbrief kann als E-Mail versendet werden.
- neu: Die Email-Felder "Betreff" und "Empfänger" akzeptieren personalisierte Werte aus der Kalkulationstabelle.
- neu: Ein Edi-Projekt kann als Dokument-Vorlage verwendet werden, nicht nur die einzelnen Excel und Word Dateien.

#### v.2.2

- neu: Der Daten-Bereich wird automatisch angepasst nachdem Spalten- bzw. Zeilen-Anzahl oder Name der Tabellenkalkulation geändert wird.
- fix: Programm-Einstellungen werden beim Update auf die neuste Programm-Version automatisch übernommen.

#### v.2.1

- neu: Ein Dokument kann über das Kontext-Menü "Öffnen mit" von Windows-Explorer geöffnet werden.
- neu: eine Projektdatei kann im Windows-Explorer angezeigt werden.
- fix: Formeln in der Kalkulationstabelle waren immer auf Deutsch.
- fix: Speichern und Löschen von Dokumenten im speichergeschützten Verzeichnis hat einen Fehler verursacht.

#### v.2.0

- neu: komplett überarbeitete Benutzerschnittstelle.
- neu: Kalkulationstabelle.
- neu: .NET Framework 4.5.2.
- breaking change: das bekannte von Edi 1.x Dokument-Format (*.edi) wurde abgelöst.

#### v.1.3

- neu: Keine Admin-Rechte werden für die Installation benötigt (vorausgesetzt .NET 4.0).
- neu: Windows 8 wird unterstützt.
- neu: Serienbrief, Serielle Korrespondenz ist möglich.
- neu: Variablen können im Header und Footer platziert werden.

#### v.1.0

- Erste Version.
