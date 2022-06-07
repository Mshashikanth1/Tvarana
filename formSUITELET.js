/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
 define(['N/ui/serverWidget', 'N/record', 'N/log'], function(serverWidget, record, log) {
    function customform(scriptContext) {
        if (scriptContext.request.method === 'GET') {
            var form = serverWidget.createForm({
                title: 'Shashikanth Custom Form'
            });



            //first filed group 1
            var fieldgroup1 = form.addFieldGroup({
                id: 'ci',
                label: 'Candidate Information'
            });
            var serialno = form.addField({
                id: 'serialno',
                type: serverWidget.FieldType.INTEGER,
                label: 'Serial No',
                container: 'ci'
            });
            var mrms = form.addField({
                id: 'mrms',
                type: serverWidget.FieldType.TEXT,
                label: 'Mr/Ms..',
                container: 'ci'
            });
            var name = form.addField({
                id: 'name',
                type: serverWidget.FieldType.TEXT,
                label: 'Name',
                container: 'ci'
            });
            var contactnumber = form.addField({
                id: 'contactnumber',
                type: serverWidget.FieldType.PHONE,
                label: 'Contact Number',
                container: 'ci'
            });
            var collagename = form.addField({
                id: 'collagename',
                type: serverWidget.FieldType.TEXT,
                label: 'Collage Name',
                container: 'ci'
            });
            var email1 = form.addField({
                id: '_email_',
                type: serverWidget.FieldType.EMAIL,
                label: 'Email id',
                container: 'ci'
            });
            var qualification = form.addField({
                id: '_qualification_',
                type: serverWidget.FieldType.TEXT,
                label: 'Qualification',
                container: 'ci'
            });
            var source = form.addField({
                id: '_source_',
                type: serverWidget.FieldType.TEXT,
                label: 'Source',
                container: 'ci'
            });
            let recrutingprocess = form.addField({
                id: '_recrutingprocess',
                type: serverWidget.FieldType.SELECT,
                label: 'Recruting Process',
                container: 'ci'
            });
            recrutingprocess.addSelectOption({
                value: '0',
                text: 'Online'
            });
            recrutingprocess.addSelectOption({
                value: '1',
                text: 'Offline'
            });




            //second filed group
            var fieldgroup2 = form.addFieldGroup({
                id: 'ati',
                label: 'Aptitude Test Information'
            });
            let aptiselect = form.addField({
                id: 'ats',
                type: serverWidget.FieldType.SELECT,
                label: 'Aptitude Test Status',
                container: 'ati'
            });
            aptiselect.addSelectOption({
                value: '1',
                text: 'PASS'
            });
            aptiselect.addSelectOption({
                value: '0',
                text: 'FAIL'
            });


            //third field group         
            var fieldgroup3 = form.addFieldGroup({
                id: 'cti',
                label: 'Coding Test Information'
            });
            let codingselect = form.addField({
                id: 'cts',
                type: serverWidget.FieldType.SELECT,
                label: 'Coding Test Status',
                container: 'cti'
            });
            codingselect.addSelectOption({
                value: '1',
                text: 'PASS'
            });
            codingselect.addSelectOption({
                value: '0',
                text: 'FAIL'
            });

            let techselect = form.addField({
                id: 'tts',
                type: serverWidget.FieldType.SELECT,
                label: 'Technical Test Status',
                container: 'cti'
            });
            techselect.addSelectOption({
                value: '1',
                text: 'PASS'
            });
            techselect.addSelectOption({
                value: '0',
                text: 'FAIL'
            });

            let techfaceselect = form.addField({
                id: 'tfts',
                type: serverWidget.FieldType.SELECT,
                label: 'technical face Test Status',
                container: 'cti'
            });
            techfaceselect.addSelectOption({
                value: '1',
                text: 'PASS'
            });
            techfaceselect.addSelectOption({
                value: '0',
                text: 'FAIL'
            });



            //add tab1
            var personaldetails = form.addTab({
                id: '_pd_',
                label: 'Personal Details'
            });
            var positionApplied = form.addField({
                id: '_pa_',
                type: serverWidget.FieldType.TEXT,
                label: 'Position Applied',
                container: '_pd_'
            });
            //tab 2
            var communicationdetails = form.addTab({
                id: '_cd_',
                label: 'Communication Details'
            });
            var phone = form.addField({
                id: '_phone_',
                type: serverWidget.FieldType.PHONE,
                label: 'Phone',
                container: '_cd_'
            });
            //sub tab 1 for personal details tab
            var fresher = form.addSubtab({
                id: '_fresher_',
                label: 'Fresher',
                tab: '_pd_'
            });
            var campuscode = form.addField({
                id: '_campuscode_',
                type: serverWidget.FieldType.TEXT,
                label: 'Campus Code',
                container: '_fresher_'
            });
            let campustype = form.addField({
                id: '_campustype_',
                type: serverWidget.FieldType.SELECT,
                label: 'Campus Type',
                container: '_fresher_'
            });
            campustype.addSelectOption({
                value: '0',
                text: 'co-edu'
            });
            campustype.addSelectOption({
                value: '1',
                text: 'Girls'
            });
            campustype.addSelectOption({
                value: '2',
                text: 'Boys'
            });
            var drivedate = form.addField({
                id: '_drivedate_',
                type: serverWidget.FieldType.DATE,
                label: 'Drive Date',
                container: '_fresher_'
            });
            var campuslocation = form.addField({
                id: '_campuslocation_',
                type: serverWidget.FieldType.TEXT,
                label: 'Campus Location',
                container: '_fresher_'
            });
            var city = form.addField({
                id: '_city_',
                type: serverWidget.FieldType.TEXT,
                label: 'City',
                container: '_fresher_'
            });


            //subtab 2 for personal details
            var laterals = form.addSubtab({
                id: '_laterals_',
                label: 'Laterals',
                tab: '_pd_'
            });
            var rank = form.addField({
                id: '_rank_',
                type: serverWidget.FieldType.INTEGER,
                label: 'Rank',
                container: '_laterals_'
            });



            //buttons
            var submitbtn = form.addSubmitButton({
                label: 'Submit'
            });
            var cancelbtn = form.addButton({
                id: '_cancelbtn_',
                label: 'Cancel',
                functionName: 'action()'
            });
            var removebtn = form.addResetButton({
                label: 'Reset'
            });
            scriptContext.response.writePage(form);
        } else {
            //the logic part
            try {
                var leadrec = record.create({
                    type: record.Type.LEAD,
                    isDynamic: true
                });
                leadrec.setValue({
                    fieldId: 'entityid',
                    value: scriptContext.request.parameters.name
                });
                leadrec.setValue({
                    fieldId: 'companyname',
                    value: scriptContext.request.parameters.collagename
                });
                leadrec.setValue({
                    fieldId: 'email',
                    value: scriptContext.request.parameters._email_
                });
                leadrec.setValue({
                    fieldId: 'phone',
                    value: scriptContext.request.parameters.contactnumber
                });
                leadrec.setValue({
                    fieldId: 'subsidiary',
                    value: 8
                });
                leadrec.setValue({
                    fieldId: 'title',
                    value: 'customtitle'
                });


                var leadId = leadrec.save({
                    enableSourcing: true,
                    ignoreMandatoryFields: false
                });
                log.debug(leadId);
            } catch (e) {
                log.debug('this is leadid:' + leadId + ' ' + e);
            }
        }

    }
    return {
        onRequest: customform
    }
});