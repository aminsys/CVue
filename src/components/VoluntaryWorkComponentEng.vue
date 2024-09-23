<template>
    <h3 id="section">Volunteering work</h3>
    <div id="voluntarySection">
        <ol>
            <li id="volItems" v-for="item in voluntaryItems">
                {{ item.role }} - {{ item.organisation }} - {{ item.date }}
            <li id="responsibilities" v-for="r in item.responsibilities">
                {{ r }}
            </li>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'voluntaryWork',
    data() {
        return {
            voluntaryItems: [
                {
                    role: 'Soccer coach',
                    organisation: 'VSK',
                    date: '2013 - 2019',
                    responsibilities: [
                        'Planned and executed training sessions and coordinated car pooling to soccer matches for teenagers aged 10 - 12 years old.'
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

#volItems {
    font-weight: bold;
    list-style-type: none;
}

#responsibilities {
    font-weight: normal;
    list-style-type: square;
}

#voluntarySection {
    padding: 25px;
}
</style>