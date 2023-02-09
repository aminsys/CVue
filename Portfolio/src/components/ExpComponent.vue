<template>
    <h3 id="avsnitt">Arbetslivserfarenhet</h3>
    <div id="workSection">
        <ol>
            <li id="workItems" v-for="item in workItems">
                {{ item.role }} - {{ item.company }} - {{ item.date }}
            <li id="responsibilities" v-for="r in item.responsibilities">
                {{ r }}
            </li>
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
                    date: '2019-03 - Pågående',
                    responsibilities: [
                        'Säkrar kodfunktionalitet i samband med kodmigrering vid uppgraderingsprojekt av ärendehanteringssytem i agilt team.',
                        'Åtgärdar buggar i användargränssnitt (UI) och dess logik (Backend).',
                        'Genomför felsökningar i databaser och tar fram databasskript för kunders varierande ändamål.',
                        'Implementerar nya system och integrerar dessa i kunders befintliga ärendehanteringssystem.',
                        'Samarbetar med kollegor och internationella aktörer vid felsökningar av kunders system.'
                    ],
                },
                {
                    role: 'Teknisk Support',
                    company: 'Barkfors Fleet AB',
                    date: '2020-05 - 2020-11',
                    responsibilities: [
                        'Utfört tekniska felsökningar av systemflöden, analys av EDI integrationer, och databasrättningar i SQL Server för diverse kunder.',
                        'Gett vägledning till användare av transport- och faktureringssystem.'
                    ]
                }
            ],
        }
    }
};

</script>

<style>
#avsnitt {
    text-align: left;
    margin-left: 10px;
}

#workItems {
    font-weight: bold;
    list-style-type: none;
    margin-top: 20px;
}

#responsibilities {
    font-weight: normal;
    list-style-type: square;
}

#workSection {
    text-align: left;
}
</style>