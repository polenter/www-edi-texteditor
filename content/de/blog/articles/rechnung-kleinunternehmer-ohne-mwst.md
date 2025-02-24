---
title: Wie Rechnung - Kleinunternehmer ohne MwSt erstellen?
subtitle: Eine einfache Rechnung ohne Mehrwertsteuer für Kleinunternehmer erstellen
description: Die Vorlage für eine Kleinunternehmer - Rechnung können Sie kostenlos aus der Online - Repository von Edi - Texteditor herunterladen und die Rechnung ohne MwSt als Serienbrief erstellen.
updatedAt: 2020-08-16
---

Um eine Rechnung-Kleinunternehmer, ohne Mehrwertsteuer zu erstellen, können Sie Ihre eigene MS Word oder OpenOffice Vorlage im Format `Docx`, `Doc` bzw. `Odt` verwenden, oder eine bestehende Vorlage aus der Online-Repository von Edi herunterladen.

Dazu bitte die Taste `Projekt-Vorlage herunterladen`, oben rechts in Edi betätigen, und die Serienbrief-Vorlage `Rechnung-Kleingewerbe ohne Umsatzsteuer` herunterladen.

<img-view src="/images/de/blog/rechnung-kleinunternehmer-ohne-mwst/0100-online-vorlage-auswaehlen.png" 
            srcquery="width=500"
            alt="Rechnung-Kleinunternehmer als Serienbrief-Vorlage aus Online-Repository herunterladen"
            link></img-view>

Die Daten-Ansicht mit Rechnungsdaten wird geöffnet.

Die Tabelle auf dem Bild besteht aus mehreren Bereichen:

##### Rechnungsdaten (Spalten `A-B`)
Sie enthalten allgemeine Rechnungsdaten, wie Rechnungsnummer, Rechnungsdatum bzw. Lieferdatum. Diese werden im Serienbrief als `Master`-Felder definiert.

##### Kundendaten (Spalten `C-F`)
Es ist die Kundenanschrift, und eventuell weitere Felder wie E-Mail, um die Rechnung dem Kunden per E-Mail zukommen zu lassen. Diese Werte werden auch als `Master`-Felder im Serienbrief definiert.

##### Rechnungspositionen (Spalten `G-K`)
Die einzelnen Rechnungspositionen werden im Serienbrief als `Detail`-Felder markiert.

##### Berechnete Rechnungsdaten (Spalte `L`)
Es können sowohl Rechnungsdaten und Rechnungspositionen sein. Diese Felder sind sehr praktisch um dieselben Daten nicht mehrmals wiederholen zu müssen. Als berechnete Rechungsdaten gilt z.B. das `Zahlungsziel = Rechnungsdatum + 14 Tage`. Bei Positionen ist es z.B. der `Betrag = Preis x Menge`.

<div class="my-10">
    <alert-info>
    Die in der Daten-Ansicht vorgenommene Formatierung (z.B. %, €, Zahlen- und Datumsformat) wird automatisch zum Serienbrief übernommen.
    </alert-info>
</div>

<img-view src="/images/de/blog/rechnung-kleinunternehmer-ohne-mwst/0200-rechnungspositionen-definieren.png" 
            srcquery="width=500"
            alt="Serienbrief-Felder in der Kalkulationstabelle von Edi definieren"
            link></img-view>

Sind die Rechnungsdaten komplett, so wird in die Dokument-Ansicht gewechselt.

Die definierten Felder werden aus der Daten-Ansicht automatisch übernommen und in der Auflistung links präsentiert.

Im herunterladenen Text-Dokument müssen lediglich die Daten des Rechnunsstellers angepasst werden, 

In Ihrem eigenen Dokument müssen die Felder aus der Auflistung auf die passenden Stellen im Dokument kopiert werden.

<img-view src="/images/de/blog/rechnung-kleinunternehmer-ohne-mwst/0300-serienbrief-felder-definieren.png" 
            srcquery="width=500"
            alt="Serienbrief-Felder auf den Text-Dokument mit der Maus schieben"
            link></img-view>

Die Rechnungspositionen müssen als `Detail`-Felder, im Master-Detail-Panel gekennzeichnet sein.

Während der Erstellung von Serienbrief kopier Edi die `Detail`-Felder, so viele Male, wie viele Rechnungspositionen es gibt.

<img-view src="/images/de/blog/rechnung-kleinunternehmer-ohne-mwst/0400-detail-felder-im-serienbrief-definieren.png" 
            srcquery="width=500"
            alt="Detail-Felder im Master-Detail-Serienbrief definieren"
            link></img-view>

Der Wert von Gesammtbetrag wird besonders gehandelt.

Um den Gesammtbetrag darstellen zu können muss das Feld `Betrag` als `Sum` markiert werden. 

Im gegebenen Fall summiert Edi die Betrag-Werte aus allen Rechnungspositionen, die zu dieser Rechnung gehören.

Das Feld `Betrag` wird insgesamt zwei Mal im Dokument verwendet - ein Mal als ``Detail`, und ein weiteres Mal als `Sum`.

<img-view src="/images/de/blog/rechnung-kleinunternehmer-ohne-mwst/0500-betrag-als-sum-feld-definieren.png" 
            srcquery="width=500"
            alt="Den Gesammtbetrag als ein Aggregate-Feld vom Typ Sum definieren"
            link></img-view>

Schließlich muss noch der `Master-Detail` Schlüssel ausgewählt werden.

Nach diesem Schlüssel werden `Detail`-Felder gruppiert und dem `Master` zugewiesen.

Der Schlüssel soll einzigartig pro Rechnung sein. Auf der Abbildung ist es die `Rechnungsnummer`.

<img-view src="/images/de/blog/rechnung-kleinunternehmer-ohne-mwst/0550-master-detail-schluessel-fuer-serienbrief-auswaehlen.png" 
            srcquery="width=500"
            alt="Schlüssel für den Master-Detail Serienbrief definieren"
            link></img-view>

Sind alle Felder definiert, die Text-Formatierung sieht gut aus, so kann die finale Version im `Druckvorschau` gesichtet werden.

<img-view src="/images/de/blog/rechnung-kleinunternehmer-ohne-mwst/0600-serienbrief-vorschau-anklicken.png" 
            srcquery="width=500"
            alt="Druckvorschau einer Rechnung-Kleinunternehmer ohne MwSt. als Serienbrief aktivieren"
            link></img-view>

In der Daten-Ansicht von Edi können Sie die komplette Rechnungshistorie pflegen.

Um eine einzelne Rechnung zu drucken, wählen Sie nur die betreffenden Zeilen aus.

Auf der Abbildung werden ausschließlich die Zeilen 2-4 ausgewählt. Dadurch wird nur die Rechnung 45/2020 gedruckt.

**Wichtig!** Es müssen ganze Zeilen ausgewählt werden.

<img-view src="/images/de/blog/rechnung-kleinunternehmer-ohne-mwst/0700-einzelne-Rechnung-als-Serienbrief-auswaehlen.png" 
            srcquery="width=500"
            alt="Eine einzelne Rechnung für den Serienbrief auswählen"
            link></img-view>

<markdown-alert border="top" colored-border type="warning" elevation="2">
Die Erstellung einer Rechnung mit mehr als einer Rechnungsposition ist ausschließlich mit Edi PRO möglich.
</markdown-alert>