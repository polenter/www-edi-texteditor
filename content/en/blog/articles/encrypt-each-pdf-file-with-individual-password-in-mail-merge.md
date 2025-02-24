---
title: How to encrypt each PDF file with individual password?
subtitle: How to use serial letter field to encrypt each PDF file individually in mail merge
description: Edi - Texteditor can mail merge into multiple PDF documents and individually encrypt each PDF file in the serial letter.
updatedAt: 2020-02-09
---

Click `Mail Merge into Multiple Files`. A dialog will be open.

If you type in the field `Password` a text value, e.g.
`abc` - Edi will encrypt all PDF files with the same password.

However - if you define a data column with a custom value for each customer, each PDF document will be encrypted individually.

Just select this column from the list and double click it or click the `Insert` button for inserting a field into the text box `Password`.

<img-view src="/images/en/blog/encrypt-each-pdf-file-with-individual-password-in-mail-merge/encrypt_pdf_files_with_individual_password.png" 
            alt="Mail merge to multiple PDF files and encrypt each PDF file with an individual password"
            link></img-view>