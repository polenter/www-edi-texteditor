---
title: How to create additional metadata files?
subtitle: Mail merge into multiple PDF documents and create metadata files for automatic document processing
description: Edi - Texteditor can mail merge into multiple PDF documents and create additional metadata files for automatic document processing.
updatedAt: 2021-05-08
trans:
    de:
        slug: metadaten-fuer-automatische-dokumentverarbeitung-generieren
---

Since the v. 3.9 Edi - Texteditor can generate additional metadata files during mail merge.

Metadata describes the generated documents in a machine friendly format.

Providing metadata is very useful if the mail merged documents should be automatically processed by a third party software.

<div class="my-10">
    <alert-info>
Due to the metadata, your documents can be automatically indexed, archived or sent per email by other web services.
    </alert-info>
</div>


Edi appends the metadata as additional text files per each generated document, from its mail merge fields.

<img-view src="/images/en/blog/create-metadata-for-automatic-document-processing/multiple-pdf-documents-with-additional-mail-merge-metadata-files.png" 
            srcquery="width=500"
            alt="Multiple PDF documents with additional mail merge metadata files"
            link></img-view>

After selecting `xml`, `json` or `ini` as the metadata file type, all mail merge fields are automatically formatted as structured data in the selected file format.

<img-view src="/images/en/blog/create-metadata-for-automatic-document-processing/append-all-mail-merge-fields-to-metadata-editor.png" 
            srcquery="width=500"
            alt="Append all mail merge fields into metadata editor"
            link></img-view>


Furthermore you can generate your custom metadata files, e.g. `edifact` or `yaml`, by manually inserting mail merge fields onto the metadata editor.

<img-view src="/images/en/blog/create-metadata-for-automatic-document-processing/insert-mail-merge-field-into-metadata-editor.png" 
            srcquery="width=500"
            alt="Insert a mail merge field into the metadata editor"
            link></img-view>

<div class="my-10">
    <alert-info>
    Create additional columns in the Data View for your metadata and customize their format to your needs.
    </alert-info>
</div>