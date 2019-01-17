<template>
    <div id="project-sidebar">
        <v-navigation-drawer fixed app v-model="drawer">
            <v-list dense>
                <v-list-tile :to="{name: 'dashboard'}">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>详情</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile :to="{name: 'demand'}">
                    <v-list-tile-action>
                        <v-icon>assignment</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>需求</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile :to="{name: 'develop'}">
                    <v-list-tile-action>
                        <v-icon>list_alt</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>任务</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile :to="{name: 'debug'}">
                    <v-list-tile-action>
                        <v-icon>bug_report</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Bug</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
    export default {
        name: 'project-sidebar',
        computed: {
            drawer: {
                get() {
                    return this.$store.state.drawer;
                },
                set(status) {
                    this.$store.commit('setDrawer', status);
                }
            }
        }
    }
</script>
