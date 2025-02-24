---
title: Wie SMTP - Server konfigurieren um E-Mails mit Office 365 zu versenden?
subtitle: Wie SMTP - Server und der Benutzer zu konfigurieren sind, um Serienbrief mit Office 365 versenden zu können
description: Edi - Texteditor FREE kann Serienbriefe per Email über MS Office 365 Server versenden.
updatedAt: 2020-05-15
trans:
    en: 
        slug: configure-smtp-server-to-send-emails-with-office-365
---
Um E-Mail mit Office 365 versenden zu können, sind sowohl der SMTP-Server als auch der E-Mail-Absender zu konfigurieren.

## SMTP-Server konfigurieren
In den Server-Einstellungen die folgenden Werte eingeben

<table>
<tr>
<td>1.</td><td style="width: 30%">Host</td><td style="width: *">smtp.office365.com</td>
</tr>
<tr>
<td>2.</td><td>Port</td><td>587 (25 im Notfall)</td>
</tr>
<tr>
<td>3.</td><td>Benutzername/Passwort</td><td>Ihre Anmeldedaten, so wie Sie sich auf der Webseite von Office 365 anmelden</td>
</tr>
</table>

<img-view src="/images/de/blog/smtp-server-konfigurieren-um-emails-mit-office-365-zu-senden/smtp-server_konfigurieren.png" 
            srcquery="width=500"
            alt="SMTP Server von Office 365 für den E-Mail-Versand von Serienbrief im Edi - Texteditor konfigurieren"
            link></img-view>

Sind Ihre Authentifizierungsdaten falsch eingegeben, so wird beim E-Mail-Versand die folgende Fehlermeldung präsentiert.

_"Für den SMTP-Server ist eine sichere Verbindung erforderlich, oder der Client wurde nicht authentifiziert. Die Serverantwort war: 5.7.57 SMTP."_

<img-view src="/images/de/blog/smtp-server-konfigurieren-um-emails-mit-office-365-zu-senden/client_wurde_nicht_authentifiziert.png" 
            srcquery="width=500"
            alt="Für den SMTP-Server ist eine sichere Verbindung erforderlich, oder der Client wurde nicht authentifiziert"
            link></img-view>

## Absender konfigurieren
Beim E-Mail-Versand wird geprüft, ob die E-Mail von Absender mit der registrierten in der Office 365 E-Mail-Adresse übereinstimmt. Deshalb es ist vorausgesetzt dieselbe E-Mail Adresse als Absender einzutragen, die für die Authentifizierung verwendet wurde.

<img-view src="/images/de/blog/smtp-server-konfigurieren-um-emails-mit-office-365-zu-senden/outlook_email_adresse_als_absender_definieren.png" 
            srcquery="width=500"
            alt="Den Benutzer für den E-Mail-Versand von Serienbrief mit Office 365 in Edi - Texteditor konfigurieren"
            link></img-view>

Wird eine Abweichung entdeckt, so wird diese mit der folgenden Fehlermeldung quittiert.

_"Fehler bei Transaktion. Die Serverantwort war: 5.2.0 STOREDRV.Submission.Exception:SendAsDeniedException.MapExceptionSendAsDenied; Failed to process message due to a permanent exception with message Cannot submit message."_

<img-view src="/images/de/blog/smtp-server-konfigurieren-um-emails-mit-office-365-zu-senden/fehler_bei_transaktion_cannot_submit_message.png" 
            srcquery="width=500"
            alt="Fehler bei Transaktion. Die Serverantwort war: 5.2.0 STOREDRV"
            link></img-view>

Weitere Details sind auf der folgenden Webseite zu finden.

<external-link href="https://docs.microsoft.com/de-de/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-office-3" target="_blank">
Einrichten eines Multifunktionsgeräts oder einer Anwendung zum Senden von E-Mails mit Office 365
</external-link>