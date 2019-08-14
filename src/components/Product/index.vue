<template>
    <v-card>
        <v-card-title>I'm a title</v-card-title>
        <v-card-text>
            {{ item }}
        </v-card-text>
        <v-card-actions>
            <v-btn text>Click</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "Product",
    props: {
        item: {
            type: Object,
            require: true,
        },
    },
};
</script>
