<template>
    <h3 id="section">Certifikat</h3>
    <div id="certSection">
        <ol>
            <li id="certItems" v-for="item in certItems">
                {{ item.role }} - {{ item.organisation }} - {{ item.date }}
            <li id="desc" v-for="r in item.desc">
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
            certItems: [
                {
                    role: 'Azure Fundamentals Certificate',
                    organisation: 'Microsoft',
                    date: '2022',
                    desc: [
                        'Grundläggande kunskaper om Microsoft Azure, molntjänster och funktioner, hantering av abonnemang, och övrig information om regler, förordningar, och teknisk support.'
                    ],
                }
            ],
        }
    }
};

</script>

<style>
#section {
    text-align: left;
    margin-left: 10px;
}

#certItems {
    font-weight: bold;
    list-style-type: none;
    margin-top: 20px;
}

#desc {
    font-weight: normal;
    list-style-type: square;
}

#certSection {
    text-align: left;
}
</style>