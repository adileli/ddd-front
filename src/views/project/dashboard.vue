<template>
    <div id="dashboard">
        <v-card
                class="mx-auto text-xs-center"
                color="green"
                dark
                max-width="600"
        >
            <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                            :value="value"
                            color="rgba(255, 255, 255, .7)"
                            height="100"
                            padding="24"
                            stroke-linecap="round"
                            smooth
                    >
                        <template
                                slot="label"
                                slot-scope="item"
                        >
                            {{ item.value }}
                        </template>
                    </v-sparkline>
                </v-sheet>
            </v-card-text>

            <v-card-text>
                <div class="display-1 font-weight-thin">{{project.name}}</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
                <v-btn block flat>查看迭代</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import projectHelper from './widget/helper.js';

    export default {
        mixins: [projectHelper],
        name: 'project-dashboard',
        data() {
            return {
                value: [
                    423,
                    446,
                    675,
                    510,
                    590,
                    610,
                    760
                ]
            }
        },
        computed: {
            project() {
                return this.$store.state.projects.project;
            },
        }
    }
</script>
