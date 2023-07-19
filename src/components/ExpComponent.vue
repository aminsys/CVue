<template>
    <h3 id="section">Arbetslivserfarenhet</h3>
    <div id="workSection">
        <ol>
            <li id="workItems" v-for="item in workItems">
                {{ item.role }} - {{ item.company }} - {{ item.date }}
            <li id="responsibilities" v-for="r in item.responsibilities">
                {{ r }}
            </li>
            <br />
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
                    role: 'IT konsult',
                    company: 'Experis AB',
                    date: '2023-04 - Pågående',
                    responsibilities: [
                        'Kompetensutveckling inom API design och utveckling, API säkerhet, och CI/CD etablerade praxis.',
                        'Programmering av API:er med ramverk som Spring Boot och .NET och verktyg som Swagger Editor och Postman.',
                        'Utforskning av möjligheter för tillämpning av Docker och MongoDB i API projekten för egen kompetensutveckling.'
                    ],
                },
                {
                    role: 'Systemutvecklare och förvaltare',
                    company: 'Formpipe Software AB',
                    date: '2019-03 - 2023-04',
                    responsibilities: [
                        'Säkrar kodfunktionalitet i samband med kodmigrering vid uppgraderingsprojekt av ärendehanteringssytem i agilt team.',
                        'Åtgärdar buggar i användargränssnitt (UI) och dess logik (Backend).',
                        'Genomför felsökningar i databaser och tar fram databasskript för kunders varierande ändamål.',
                        'Implementerar nya system och integrerar dessa i kunders befintliga ärendehanteringssystem.',
                        'Samarbetar med kollegor och internationella aktörer vid felsökningar av kunders system.'
                    ],
                }
            ],
        }
    }
};

</script>

<style>
#section {
    font-size: xx-large;
}

#workItems {
    font-weight: bold;
    list-style-type: none;
}

#responsibilities {
    font-weight: normal;
    list-style-type: square;
}

#workSection {
    padding: 25px;
}
</style>