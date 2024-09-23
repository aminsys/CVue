<template>
    <h3 id="section">Work Experience</h3>
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
                    role: 'IT Consultant',
                    company: 'Experis AB',
                    date: '2023-04 - Current',
                    responsibilities: [
                    'Introduced, implemented and until today maintaining an attendance web app (Vue.js, .NET Core web API, Azure SQL DB, Azure Web App Service) to facilitate co-working at the office',
                    'Competence development within design, development, and life cycle management of REST APIs',
                    'Parental leave between Aug - Dec 2023'
                    ],
                },
                {
                    role: 'Software developer',
                    company: 'Formpipe Software AB',
                    date: '2019-03 - 2023-04',
                    responsibilities: [
                        'Developed and maintained custom controls using C# and Javascript (in ASP.NET)',
                        'Maintained case and document management systems',
                        'Investigated the feasibility of using new product in market',
                        'Wrote and maintained over a dozen database scripts for data visualization',
                        'Mentored two colleagues'
                    ],
                },
                {
                    role: 'Technical support',
                    company: 'Barkfors Fleet AB',
                    date: '2020-05 - 2020-11',
                    responsibilities: [
                    'Investigated reported issues on Barkfors’ transportation application for several customers',
                    'Assisted and solved reported incidents from customers',
                    'Deployed newer versions of T5 to customers’ environments'
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