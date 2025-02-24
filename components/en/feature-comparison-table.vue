<template>
    <feature-comparison-table-body 
    :dataView="dataView"
    :textView="textView"
    :mailMerge="mailMerge"
    :mailMergeToFile="mailMergeToFile"
    :mailMergeToEmail="mailMergeToEmail"></feature-comparison-table-body>
</template>

<script>
export default {
    data: function() {
        const free = true;
        const pro = true;
        const latest = true;
        return {
            dataView: {
                caption: "Data View",
                items: [
                    {
                        caption: 'Group, sort, link and filter data',
                        free,
                        pro
                    },
                    {
                        caption: 'Use financial, logical, text, math, date & time formulas',
                        free,
                        pro
                    },
                    {
                        caption: 'Use conditional formulas (if A equals 0 then show B, otherwise show C)',
                        free,
                        pro
                    },
                    {
                        caption: 'Password protection for the whole workbook or single sheet',
                        free,
                        pro
                    },                                                                        
                ],            

            },
            textView: {
                caption: "Text View",
                items: [
                    {
                        caption: 'Insert tables, pictures, bookmarks, hyperlinks and table of contents',
                        free,
                        pro
                    },                                                                        
                    {
                        caption: 'Protect document with a password',
                        free,
                        pro
                    },                                                                                                                        
                ],
            },
            mailMerge: {
                caption: "Mail Merge",
                items: [
                    {
                        caption: 'Use existing Excel, Word, OpenOffice files as mail merge template',
                        free,
                        pro
                    },                                                                        
                    {
                        caption: 'Download mail merge template from the online repository of Edi',
                        free,
                        pro
                    },                                                                                                                        
                    {
                        caption: 'Automatically update field list according to the data source',
                        free,
                        pro
                    },
                    {
                        caption: 'No watermark "Made with Edi FREE"',
                        pro
                    },
                    {
                        caption: 'Include images into the serial letter. Mail merge with photos and pictures',
                        pro,
                        latest
                    },
                    {
                        caption: 'Include bar codes into the serial letter. Mail merge with QR codes',
                        pro,
                        latest
                    },
                    {
                        caption: 'Include hyperlinks to other documents and websites from the serial letter. Mail merge with links',
                        pro,
                        latest
                    },
                ],
            },
            mailMergeToFile: {
                caption: "Mail Merge to File",
                items: [
                    {
                        caption: 'Create serial letter as Pdf, Docx, Doc, Odt, EPub, Mht, Rtf, Xml, Html, Txt',
                        free,
                        pro
                    },                                                                        
                    {
                        caption: 'Mail merge as a single PDF file with a single PAGE per customer',
                        free,
                        pro
                    },                                                                                                                        
                    {
                        caption: 'Mail merge as multiple PDF files with a single DOCUMENT per customer',
                        free,
                        pro
                    },
                    {
                        caption: 'Name serial letter documents individually for each customer',
                        free,
                        pro
                    },
                    {
                        caption: 'Sign PDF files after mail merge',
                        pro,
                        latest
                    },                    
                    {
                        caption: 'Encrypt each PDF file with an individual password per customer',
                        pro
                    },
                    {
                        caption: 'Secure each PDF file in serial letter against opening or modification - on demand - with an individual password',
                        pro
                    },
                    {
                        caption: 'Mail merge master-detail reports (e.g. invoice, catering menu)',
                        pro,
                        latest
                    },
                    {
                        caption: 'Mail merge with additional metadata as xml, json, ini, edifact, yaml for automatic document processing',
                        pro,
                        latest
                    },
                ],
            },

            mailMergeToEmail: {
                caption: "Mail Merge To Email",
                items: [
                    {
                        caption: 'Send personalized serial letters as email message',
                        free,
                        pro
                    },                                                                        
                    {
                        caption: 'Send serial letters per email as a PDF file attachment',
                        free,
                        pro
                    },                                                                                                                        
                    {
                        caption: 'Send serial letter email copy to yourself for evidence (e.g. CC, BCC)',
                        free,
                        pro
                    },
                    {
                        caption: 'Mail merge encrypted PDF files as email attachments',
                        pro
                    },
                    {
                        caption: 'Send multiple attachments per email (e.g. invoice + privacy policy)',
                        pro,
                        latest
                    },
                    {
                        caption: 'Use multiple sender identities (FROM) in an email serial letter (e.g. company A, company B, private person)',
                        pro
                    },
                    {
                        caption: 'Use multiple email servers to elude SPAM limits of a single email server',
                        pro
                    },                                                                                            
                ]
            },             
        }
    }
}
</script>

<style scoped>
</style>