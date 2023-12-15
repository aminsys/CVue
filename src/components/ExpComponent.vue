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
                    'Studerade design, utveckling och livscykelhantering av REST API:er genom kursmaterial via arbetsplatsen',
                    'Implementerade REST API-projekt i C#, Docker och MongoDB'
                    ],
                },
                {
                    role: 'Systemutvecklare och förvaltare',
                    company: 'Formpipe Software AB',
                    date: '2019-03 - 2023-04',
                    responsibilities: [
                        'Utvecklade anpassade kontroller med C# och Javascript (i ASP.NET) för att bibehålla funktionalitet under uppgraderingsprojekt för kundens system',
                        'Fixade UI- och logik buggar i samband med uppgraderingsprojektet till en nyare version av ett dokumenthanteringssystem',
                        'Underhöll ärende- och dokumenthanteringssystem på fem olika projekt där datafelsökning och data korrigering en stor del av arbetsvardagen',
                        'Undersökte möjligheten att implementera och använda Signing Portal för att signera dokument med utfärdade certifikat genom Telias certifikattjänst',
                        'Ledde och implementerade produktions klara Signerings Portaler på två projekt och stöttade tre andra projekt av samma typ',
                        'Skrev och underhöll över ett dussin databasskript för datavisualisering som användes i Manage Engine Analytics Plus och Power BI',
                        'Var arbetsmentor för två kollegor som gav stöd till slutanvändare av ärendehanteringssystem i två långsiktiga projekt'
                    ],
                },
                {
                    role: 'Teknisk support',
                    company: 'Barkfors Fleet AB',
                    date: '2020-05 - 2020-11',
                    responsibilities: [
                    'Undersökte grundorsakerna till dataavvikelser i SQL-databaser och EDI-filer (i XML-format) och korrigerade sådana avvikelser för ett dussin kunder in transportbranschen',
                    'Stöttade slutanvändare med frågor och förtydliganden av användningen av transportprogrammet T5 av Barkfors Fleet AB via telefonsamtal och supportsystem',
                    'Installerande nyare versioner av T5 på kundernas miljöer'
                    ],
                },
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