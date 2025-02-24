---
title: How to create a master-detail mail merge?
subtitle: Mail merge invoices, catering menus as a master-detail report
description: Create master-detail mail merge with minimum amount of input data.
updatedAt: 2021-05-09
trans:
    de:
        slug: master-detail-serienbrief-erstellen
---

## Data structure

Edi - Texteditor requires minimal amount of data, to create a master-detail mail merge.

The master row `(1)`, and the first detail are joined into a full row.

Further detail rows contain only differences to the full row `(2)`.

All missing values in the detail rows are taken from the master row.

<div class="mt-10">
    <alert-info>
    Due to the empty spaces between master rows, the whole data table looks much cleaner.
    </alert-info>
</div>

<img-view src="/images/en/blog/master-detail-mail-merge/create-data-table-for-master-detail-mail-merge.png" 
            srcquery="width=500"
            alt="Create data table for master detail mail merge"
            link></img-view>


## Detail fields
As default, all mail merge fields in a document are of type `master`.

A field must be of type `detail` to be printed multiple times on the same page.

Select all detail fields and change their field type to `detail`.

<img-view src="/images/en/blog/master-detail-mail-merge/define-detail-fields-in-master-detail-mail-merge.png" 
            srcquery="width=500"
            alt="Define detail fields in a master-detail mail merge"
            link></img-view>


<div class="my-10">
    <alert-info>
    You can place the detail fields <strong>in a single table row</strong> (like the above one), or <strong>in a single list item</strong>.
    </alert-info>
</div>

## Aggregate fields
Some fields are `aggregate` ones. The aggregate fields are: 
- `Count`: A count of detail rows per page.
- `Sum`: A sum of all detail values.
- `Min`: The least value of all details.
- `Max`: The opposite to `Min`

Change the field type of the field `Due-Amount` to `Sum`, for showing the summary.

<img-view src="/images/en/blog/master-detail-mail-merge/define-aggregated-sum-field-in-master-detail-mail-merge.png" 
            srcquery="width=500"
            alt="Define aggregated sum field in a master-detail mail merge"
            link></img-view>


## Master-detail key

For creating a master-detail mail merge a `key` is required.

All data on the same page must have the same key value.

Is there no key defined, e.g. there is no invoice-, order- or customer number provided, a unique key should be created manually, as an additional column in the Data View.

In the following screenshot the key is the number of the payment reminder.

<img-view src="/images/en/blog/master-detail-mail-merge/set-key-in-master-detail-mail-merge.png" 
            srcquery="width=500"
            alt="Set the key in a master-detail mail merge"
            link></img-view>


## Select mail merge data for printing

In case you need to print only a single page, please select only the concerning rows.

Is there no selection provided, all pages are printed.

<img-view src="/images/en/blog/master-detail-mail-merge/select-data-for-master-detail-mail-merge.png" 
            srcquery="width=500"
            alt="Select data for a master-detail mail merge"
            link></img-view>


## Print preview

In the Text View there is only the first detail row visible.

For viewing all detail rows, please click the button `Print Preview` at the top of the main window.

<img-view src="/images/en/blog/master-detail-mail-merge/print-preview-of-master-detail-mail-merge.png" 
            srcquery="width=500"
            alt="Print preview of a master-detail mail merge"
            link></img-view>


<div class="my-10">
    <alert-info>
    The best way to learn more about master-detail mail merge, is to download and analyse a ready made serial letter templates from the online repository.
    </alert-info>
</div>

<img-view src="/images/en/blog/master-detail-mail-merge/download-master-detail-mail-merge-template.png" 
            srcquery="width=500"
            alt="Download a master-detail mail merge template"
            link></img-view>

