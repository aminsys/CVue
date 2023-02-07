<template>
    <h3 id="avsnitt">Arbetslivserfarenhet</h3>
    <div>
        <ol>
            <li id="workItems" v-for="item in workItems">
                {{ item.role }} - {{ item.company }} - {{ item.date }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'exp',
    data() {
        return {
            workItems: [
                {
                    role: 'Systemutvecklare och förvaltare',
                    company: 'Formpipe Software AB',
                    date: '2019-03 - Pågående'
                },
                {
                    role: 'Teknisk Support',
                    company: 'Barkfors Fleet AB',
                    date: '2020-05 - 2020-11'
                }
            ],

            responsibilitiesFpSwe: [
                'Säkrar kodfunktionalitet i samband med kodmigrering vid uppgraderingsprojekt av ärendehanteringssytem i agilt team.',
                'Åtgärdar buggar i användargränssnitt (UI) och dess logik (Backend).',
                'Genomför felsökningar i databaser och tar fram databasskript för kunders varierande ändamål.',
                'Implementerar nya system och integrerar dessa i kunders befintliga ärendehanteringssystem.',
                'Samarbetar med kollegor och internationella aktörer vid felsökningar av kunders system.'
            ],
            responsibilitiesFpEng: [
                'Delivering bug fixes and user-control customizations while upgrading EDM systems using ASP.NET and updating SQL Server procedures.',
                'Implementing and launching new systems on stakeholders’ environments.',
                'Investigating root causes of reported incidents and problems and collaborating with colleagues and vendors.'
            ]
        }
    }
};

</script>

<style>
#avsnitt {
    float: left;
    margin: 10px;
}

#workItems {
    font-weight: bold;
    list-style-type: none;
    margin-top: 20px;
}
</style>