---
title: Download
subtitle: Download Edi
description: Download Edi - Texteditor FREE and use it for free - life long, even for business purposes.
---

<h2 class="mb-4">Files</h2>

<markdown-link href="/edi-texteditor-setup-v3.103.exe"><strong>Edi 3.103 from Sept 23rd, 2023</strong></markdown-link> <span class="text-sm text-gray-600">(.NET 4.7.2 required, normally included in Windows)</span>

<div class="my-10">
  <alert-info>
    There is only one Hybrid-Installer for Windows 32/64 bit and English/German user interface.
  </alert-info> 
</div>

<markdown-link href="/edi-texteditor-v3.103.zip">Edi 3.103 portable.zip</markdown-link> <span class="text-sm text-gray-600">(.NET 4.7.2 required)</span><br/>

<download-older-versions class="text-sm mt-8"></download-older-versions>


## System Requirements

Computer with 32- or 64-bit operating system:

- Windows 10
- Windows 8.x
- Windows 7

Edi requires .NET Framework 4.7.2, which is a standard component of Windows 10. The .NET Framework is a recommended Windows Update.

## Milestones

#### v.3.102
- new: Bar codes and QR codes can be generated in PRO, due to the MERGEBARCODE field.
- new: Images can be generated in PRO, due to the INCLUDEPICTURE field.
- new: Links can be generated in PRO, e.g. in PDF files.
- new: After replacing of invalid characters in filenames, their amount will not be reducing by using *SuppressCompressingUnderscores* setting.
- fix: The error *Object reference not set to an instance of an object* is no more shown during sending of emails.
- fix: No error message *An item with the same key has already been added* is shown for column headers with the same content, but different casing.
- fix: No *InvalidPrinterException* is thrown if there is no printer installed.

#### v.3.95
- fix: HTML content of an email message was not explicitly marked as UTF8.
- fix: Table of contents has not presented page numbers.

#### v.3.93
- new: New button `Copy empty cell from above one` in the data view.
- fix: Formatting in master-detail was optimized.

#### v.3.91

- fix: In some cases the auto update has not recognized the available program version.

#### v.3.10

- new: Filling metadata editor with all mail merge fields after selecting xml, json or ini as the metadata file extension.

#### v.3.9

- new: PDF documents can be signed with an X.509 certificate.
- new: Additional metadata files, e.g. xml, json, ini, edifact can be created for automatic document processing.

#### v.3.5

- fix: after automatic generation of email attachment pattern, some email attachments were not recognized.
- fix: particular characters were replaced in the PDF password against undescore.

#### v.3.4

- fix: an empty cell is taken from the previous row, only in the Master-Detail mode.

#### v.3.3

- fix: an error is thrown, if there are detail fields defined in a list.

#### v.3.2

- new: A selected spreadsheet range can be optionally printed.
- fix: The error: "Specified document position or range belongs to other document or subdocument.." was shown after editing header or footer.

#### v.3.0

- new: Master-Detail report.
- new: Multiple document attachments per email.
- new: Completely rewritten installer.
- new: Communication with insecure, company internal email server is accepted.

#### v.2.8

- fix: the port number was always reset to 25 in the SMTP server editor.

#### v.2.7

- new: Documents can be send as email attachments.
- new: Multiple email recipients can be defined (CC, BCC).
- new: Field names and values can be selected automatically.
- new: Polish user interface.

#### v.2.5

- new: PDF documents can be encrypted for mail merge.
- new: Email communication is secured with TLS/SSL.

#### v.2.4

- new: Dialog for downloading document templates from the online database of Edi.
- new: Mail merge as Email.
- new: The email fields "subject" and "recipient" accept personalized cell values from data view.
- new: An Edi project can be used as a document template.

#### v.2.2

- new: data range is automatically updated after the column/row count or the worksheet name is changed.
- fix: program settings are automatically taken from the previous program version during update.

#### v.2.1

- new: Document can be opened using the "open with" from context menu in Windows Explorer.
- new: the project file can be shown in Windows Explorer.
- fix: Formulas were available only in german language.
- fix: An exception has occured if documents were saved or deleted in a read only folder.

#### v.2.0

- new: completely redesigned User Interface.
- new: Spreadsheet functionality.
- new: based on .NET 4.5.2.
- breaking change: the *.edi document format known from Edi 1.x is obsolete and no more supported.

#### v.1.3

- new: Admin rights are no more needed for installing (if .NET 4,0 Client Profile is installed).
- new: Support for Windows 8.
- new: Mail Merge.
- new: Variables can be placed in header and footer.

#### v.1.0

- Initial release.
