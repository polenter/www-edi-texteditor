---
title: How to define multiple recipients per email?
subtitle: How to define additional CC, BCC email recipients for evidence
description: Edi - Texteditor FREE can send serial letters at multiple recipients as CC, BCC, e.g. for evidence purposes
updatedAt: 2020-04-12
---

An address of a recipient can consist only of an email address, e.g.:
`info@johndoe.com`  
or it can be a combination of recipients name and his email, e.g.:
`John Doe <info@johndoe.com>`

Additionally his email address type in Edi can be one of the following types:

1. TO (default)
1. CC (carbon copy)
1. BCC (blind carbon copy)


If there is no prefix, the (1) is selected, otherwise a copy will be sent, e.g.
`CC:John Doe <info@johndoe.com>`

You can define multiple recipients separating them with ; (semicolon), e.g.
`{Name} <{Email}>;CC:John Doe <info@johndoe.com>`

In the above scenario,
- first email will be sent to the customer at his `Email` field value
- second email will be sent as a carbon copy to `info@johndoe.com`

<img-view src="/images/en/blog/define-multiple-mail-merge-recipients-per-email/define_multiple_email_recipient_per_serial_letter.png" 
            srcquery="width=500"
            alt="Mail merge to email and set multiple email recipients (CC, BCC)"
            link></img-view>