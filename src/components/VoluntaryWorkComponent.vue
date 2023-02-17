<template>
    <h3 id="section">Voluntärt arbete</h3>
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
                    role: 'Fotbollstränare',
                    organisation: 'VSK',
                    date: '2013 - 2019',
                    responsibilities: [
                        'Planerade och utförde träningspass samt koordinerade och åkte med på fotbollsmatcher med ungdomar i åldrarna 10 – 12.'
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