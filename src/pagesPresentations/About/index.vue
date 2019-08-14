<template>
    <ViewBase>
        <div class="p-about">
            <p v-if="isGhPage">
                К сожалению на gh-page не работает api
            </p>
            <p>
                Приложение было создано в качестве разминки и для пробы
                другого конфига Eslint`а и для знакомства с Vuetify
            </p>
        </div>
    </ViewBase>
</template>

<script>
import ViewBase from "@/views/Base";

export default {
    name: "AboutPresentations",
    components: {
        ViewBase
    },
    computed: {
        isGhPage() {
            return process.env.VUE_APP_IS_GH_PAGE;
        }
    }
};
</script>
