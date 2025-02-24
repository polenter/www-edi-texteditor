---
title: What is Edi project?
subtitle: How Edi project links Excel and Word documents for mail merge
description: Edi - Texteditor can update serial letter instantly due to the permanent link between data and the text document.
updatedAt: 2020-01-28
trans:
    de: 
        slug: edi-projekt
---
## Purpose of Edi project

Edi project file (`.csproj`) is a bridge between a data document (`.xlsx`, `.xls`) and a text document (`.docx`, `.doc`, `.odt`). Edi produces a serial letter by linking data from the first document with text from the latter one. Due to the permanent link between data and the text document, the serial letter is updated instantly.

<img-view src="/images/en/blog/edi-project/edi-project-0100.png" alt="Edi project links a data and a text document together"></img-view>

The project file contains common project information, e.g. storage location and settings of the latest mail merge into multiple files.

## Update data source automatically
After replacing data document with another one, the data source is automatically updated next time the project is open.  
Created serial letters have the same layout, but different data content.

<img-view src="/images/en/blog/edi-project/edi-project-0200.png" alt="One data source document replaced by another one"></img-view>

## Use different Serial Letter Layouts
On the other hand, if you replace the text layout document, you can present your data in a different way.

Of course you can replace both documents at the same time.