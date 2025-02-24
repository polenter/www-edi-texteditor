---
title: How to configure SMTP server to send emails with Office 365?
subtitle: The most important settings for sending emails with Ms Office 365
description: Edi - Texteditor FREE can send serial letters using MS Office 365 servers.
updatedAt: 2020-05-15
trans:
    de: 
        slug: smtp-server-konfigurieren-um-emails-mit-office-365-zu-senden
---

For sending emails with Office 365 you need to configure the SMTP server and the email sender.


## Configure SMTP Server
Set the following values in the settings of the SMTP-Server

<table>
<tr>
<td>1.</td><td style="width: 30%">Host</td><td style="width: *">smtp.office365.com</td>
</tr>
<tr>
<td>2.</td><td>Port</td><td>587 (25 works too)</td>
</tr>
<tr>
<td>3.</td><td>Username/Password</td><td>User credentials used for access to the Office 365</td>
</tr>
</table>

<img-view src="/images/en/blog/configure-smtp-server-to-send-emails-with-office-365/configure_smtp_server_for_sending_emails_with_office_365.png" 
            srcquery="width=500"
            alt="Configure Edi for working with SMTP email server of Office 365"
            link></img-view>

Are the user credentials wrong, the following error message will be shown, when sending the emails.

*"The SMTP server required a secure connection or the client was not authenticated. The server response was: 5.7.57 SMTP; Client was not authenticated to send anonymous mail during MAIL FROM ..."*

<img-view src="/images/en/blog/configure-smtp-server-to-send-emails-with-office-365/client_was_not_authenticated_to_send_anonymous_mail.png" 
            srcquery="width=500"
            alt="The SMTP server required a secure connection or the client was not authenticated. The server response was: 5.7.57 SMTP"
            link></img-view>


## Configure Email Sender
Office 365 validates email of the sender and does not allow sending emails from unknown addresses.

The email must match the registered one in Office 365. Please use the same email address for sender, you have used in the user credentials during configuration of the SMTP server.

<img-view src="/images/en/blog/configure-smtp-server-to-send-emails-with-office-365/sender_email_must_match_registered_user_of_office_365.png" 
            srcquery="width=500"
            alt="Setting the sender email address for SMTP email server of Office 365"
            link></img-view>

Is there an unknown email detected, the following error message will be shown during sending emails.

*"Transaction failed. The server response was: 5.2.0 STOREDRV.Submission.Exception:SendAsDeniedException.MapExceptionSendAsDenied; Failed to process message due to a permanent exception with message Cannot submit message..."*

<img-view src="/images/en/blog/configure-smtp-server-to-send-emails-with-office-365/server_response_was_5_2_0_storedrv.png" 
            srcquery="width=500"
            alt="Transaction failed. The server response was: 5.2.0 STOREDRV.Submission.Exception:SendAsDeniedException.MapExceptionSendAsDenied"
            link></img-view>

For further details please refer to the following page  
<external-link href="https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-office-3" target="_blank">
How to set up a multifunction device or application to send email using Office 365
</external-link>