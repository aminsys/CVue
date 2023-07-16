<template>
    <div id="name">
        <h2>{{ myName }}</h2>
    </div>
    <hr />
    <div id="contactInfo">
        <div id="ci">
            <!-- Image of phin by Those Icons -->
            <img alt="Address" width="24px" height="24px" src="/src/assets/pin.png" />
            <p>Malmö</p>
        </div>
        <div id="ci">
            <!-- Image of email icon by khulqi Rosyid -->
            <img alt="Email" width="24px" height="24px" src="/src/assets/mail.png" />
            <a href="mailto:amin.yassin@live.com">amin.yassin@live.com</a>
        </div>
        <div id="ci">
            <!-- Image of mobile phone by khulqi Rosyid -->
            <img alt="Mobile Phone" width="24px" height="24px" src="/src/assets/mobile-phone.png" />
            <a href="+46" target="_blank">+46</a>
        </div>
        <div id="ci">
            <img alt="Github" width="24px" height="24px" src="/src/assets/github-mark.png" />
            <a href="https://github.com/aminsys" target="_blank">github.com/aminsys</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'info',
    props: {
        myName: String
    }
}
</script>

<style>
#ci {
    display: inline-flex;
    margin: 1%;
    align-items: center;
}

img {
    margin: 5px;
}

#contactInfo {
    margin-top: -10px;
    text-align: center;
}

#name {
    font-size: xx-large;
    text-align: center;
}
</style>