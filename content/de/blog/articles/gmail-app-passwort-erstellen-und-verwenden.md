---
title: Wie Gmail App-Passwort erstellen und verwenden?
subtitle: Ein App-Passwort wird vorausgesetzt um Emails mit Gmail versenden zu können
description: Ohne ein App-Passwort Gmail informiert, dass für den SMTP server ist eine sichere Verbindung erforderlich ist.
updatedAt: 2022-09-15
---

Ein Versuch Emails mit Gmail ohne App-Passwort zu versenden, wird mit der folgenden Fehlermeldung quittiert.

_Für den SMTP server ist eine sichere Verbindung erforderlich oder der client wurde nicht identifiziert.Serverantwort: 5.7.0_

## Lösung

Folgend werden die wichtigsten Schritte von der folgenden Support-Webseite von Google präsentiert:  
<external-link href="https://support.google.com/mail/answer/185833?hl=de" target="_blank">
Mit App-Passwörtern anmelden
</external-link>



<b>1.</b> Die folgende Webseite öffnen  
<external-link href="https://myaccount.google.com/" target="_blank">
Google-Konto
</external-link>

<b>2.</b> Den `Sicherheit` Reiter auswählen, sich nach Bedarf anmelden.

<b>3.</b> Die `App-Passwörter` anklicken.

<img-view src="/images/de/blog/gmail-app-passwort-erstellen-und-verwenden/bei-google-anmelden-und-app-passwort-bearbeiten.png" 
            srcquery="width=500"
            alt="Gmail Sicherheit-Einstellungen öffnen und App-Passwort konfigurieren"
            link></img-view>


<b>4.</b> `Andere` als App auswählen.

<img-view src="/images/de/blog/gmail-app-passwort-erstellen-und-verwenden/andere-app-als-app-passwort-auswaehlen.png" 
            srcquery="width=500"
            alt="Andere als App-Passwort auswählen"
            link></img-view>


<b>5.</b> `Name` für das neue App-Passwort eingeben und die `Generieren` Taste anklicken. Das präsentierte Passwort merken.

<img-view src="/images/de/blog/gmail-app-passwort-erstellen-und-verwenden/name-fuer-app-passwort-eingeben.png" 
            srcquery="width=500"
            alt="Name für App-Passwort eingeben"
            link></img-view>




<b>6.</b> Die neuste Version von Edi herunterladen und installieren (Edi 3 oder höher).  
[Herunterladen](https://www.edi-texteditor.com/de/download)


<b>7.</b> Edi öffnen und die folgenden Felder als `Server-Einstellungen` in einer `Email-Kampagne` eingeben.

<table style="margin-left: 1em">
<tr>
<td>a.</td><td style="width: 30%">Host</td><td style="width: *">smtp.gmail.com</td>
</tr>
<tr>
<td>b.</td><td>Port</td><td>587</td>
</tr>
<tr>
<td>c.</td><td>Benutzername</td><td>Ihr Gmail-Anmeldename</td>
</tr>
<tr>
<td>d.</td><td>Passwort</td><td>Das neulich generierte App-Passwort</td>
</tr>
</table>


<img-view src="/images/de/blog/gmail-app-passwort-erstellen-und-verwenden/gmail-smtp-server-einstellungen-in-edi-konfigurieren.png" 
            srcquery="width=500"
            alt="Gmail-SMTP-Server in Edi konfigurieren"
            link></img-view>


