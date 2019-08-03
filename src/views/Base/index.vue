<template>
    <div class="v-base">
        <v-app-bar
            color="deep-purple accent-4"
            dense
            dark
        >
            <v-toolbar-title>Markup</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-btn
                            text
                            color="primary"
                            tag="router-link"
                            :to="{name: 'home'}"
                            exact
                        >
                            Главная
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn text color="primary" tag="router-link" :to="{name: 'about'}">
                            О сайте
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ViewBase'
}
</script>
