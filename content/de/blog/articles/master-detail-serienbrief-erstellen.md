---
title: Wie einen Master-Detail Serienbrief erstellen?
subtitle: Rechnung, Mahnung, Speisekarte als Master-Detail Serienbrief generieren
description: Edi - Texteditor kann Master-Detail Serienbriefe erstellen.
updatedAt: 2021-05-09
trans:
    en:
        slug: master-detail-mail-merge
---

## Daten-Struktur

Edi - Texteditor braucht so wenig Daten wie möglich, um einen Master-Detail Serienbrief erstellen zu können.

Eine Master-Zeile `(1)`, sowie die erste Detail-Zeile ist eine volle Zeile.

Die weiteren Detail-Zeilen `(2)` ergänzen lediglich die erste Zeile.

Ist ein Wert in der Detail-Zeile nicht vorhanden, so wird dieser von der übergeordneten Master-Zeile übernommen.

<div class="mt-10">
    <alert-info>
    Die leeren Zellen zwischen den Master-Zeilen helfen einen besseren Überblick zu behalten.
    </alert-info>
</div>

<img-view src="/images/de/blog/master-detail-serienbrief-erstellen/master-detail-tabelle-mit-serienbrief-daten-erstellen.png" 
            srcquery="width=500"
            alt="Master-Detail Tabelle mit Serienbrief-Daten erstellen"
            link></img-view>


## Detail-Felder
Standarmäßig werden alle Serienbrief-Felder einem Dokument als `Master` hinzugefügt.

Um ein Serienbrief-Feld mehrfach, auf einer Seite drucken zu können, muss dieser als `Detail` markiert werden.

Dazu bitte alle Detail-Felder auswählen und ihren Feldtyp zu `Detail` ändern.

<img-view src="/images/de/blog/master-detail-serienbrief-erstellen/serienbrief-feld-als-detail-in-einem-master-detail-report-markieren.png" 
            srcquery="width=500"
            alt="Serienbrief-Feld als Detail, in einem Master-Detail-Report markieren"
            link></img-view>


<div class="my-10">
    <alert-info>    
    Es ist empfohlen die Detail-Felder <strong>in einer einzelnen Tabellen-Zeile</strong> (wie oben), oder als <strong>ein einzelner Eintrag einer Auflistung</strong> zu definieren.    
    </alert-info>
</div>

## Aggregate-Felder
Bestimmte Felder sind s.g. `aggregate` Felder. Dazu zählen: 
- `Count`: Anzahl von Detail-Zeilen
- `Sum`: Summe aller Werten in den Detail-Zeilen
- `Min`: Minimaler Wert aus allen Detail-Zeilen
- `Max`: Gegenteil zu `Min`

Ändern Sie den Feldtyp von `Betrag` zu `Sum`.

<img-view src="/images/de/blog/master-detail-serienbrief-erstellen/summen-feld-in-einem-master-detail-serienbrief-definieren.png" 
            srcquery="width=500"
            alt="Summen-Feld in einem Master-Detail Serienbrief definieren"
            link></img-view>


## Master-Detail-Schlüssel

Alle Daten-Zeilen in einem Master-Detail Serienbrief werden nach einem `Schlüssel` gruppiert.

Alle Daten auf derselben Seite müssen denselben Schlüssel enthalten.

Ist kein Schlüssel im Daten-Bestand definiert, z.B. keine Rechnungs-/Bestell-/Kunden-Nummer vorhanden, so soll eine neue Spalte mit einem eindeutigen Schlüssel erstellt werden.

Im folgenden Beispiel ist die Rechnungsnummer der Schlüssel.

<img-view src="/images/de/blog/master-detail-serienbrief-erstellen/schluessel-in-einem-master-detail-serienbrief-definieren.png" 
            srcquery="width=500"
            alt="Schlüssel in einem Master-Detail Serienbrief definieren"
            link></img-view>


## Serienbrief-Daten auswählen

Wünschen Sie nur eine einzelne Seite zu drucken, so sind nur die betreffenden Zeilen in der Daten-Ansicht auszuwählen.

Wählen Sie keine Zeile aus, so werden alle Daten gedruckt.

<img-view src="/images/de/blog/master-detail-serienbrief-erstellen/daten-fuer-master-detail-serienbrief-auswaehlen.png" 
            srcquery="width=500"
            alt="Daten für einen Master-Detail Serienbrief auswählen"
            link></img-view>


## Druck-Vorschau

In der Text-Ansicht ist nur das erste Detail sichtbar.

Um alle Details sehen zu können, ist die Taste `Druckvorschau`, oben im Fenster zu betätigen.

<img-view src="/images/de/blog/master-detail-serienbrief-erstellen/druckvorschau-eines-master-detail-serienbriefs.png" 
            srcquery="width=500"
            alt="Druckvorschau eines Master-Detail Serienbriefs"
            link></img-view>


<div class="my-10">
    <alert-info>
    Die Erstellung von Master-Detail Serienbriefen lernen Sie am besten, wenn Sie die fertiggebauten Serienbrief-Vorlagen herunterladen und diese analysieren.
    </alert-info>
</div>

<img-view src="/images/de/blog/master-detail-serienbrief-erstellen/master-detail-serienbrief-vorlage-herunterladen.png" 
            srcquery="width=500"
            alt="Master-Detail Serienbrief-Vorlage herunterladen"
            link></img-view>

