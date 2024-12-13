<template>
    <h3 id="section">Certificates</h3>
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
    name: 'certifications',
    data() {
        return {
            certItems: [
                {
                    role: 'Azure Fundamentals Certificate',
                    organisation: 'Microsoft',
                    date: '2022',
                    desc: [
                        'Able to demonstrate foundational knowledge of cloud concepts in general and Microsoft Azure in particular.'
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
    text-align: left;
    padding-left: 15px;
}

#certItems {
    font-weight: bold;
    list-style-type: none;
}

#desc {
    font-weight: normal;
    list-style-type: square;
}

#certSection {
    padding: 25px;
}
</style>