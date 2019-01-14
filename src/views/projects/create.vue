<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field v-model="name" :counter="64" :rules="nameRules" label="项目名称" ></v-text-field>
                </v-flex>

                <v-flex xs12>
                    <v-text-field v-model="summary" :counter="256" :rules="summaryRules" label="项目简介" ></v-text-field>

                </v-flex>

                <v-flex xs6>
                    <v-radio-group v-model="visible" row label="可见度">
                        <v-radio label="公开" value="1" :color="this.$store.state.primary_color"></v-radio>
                        <v-radio label="私有" value="0" :color="this.$store.state.primary_color"></v-radio>
                    </v-radio-group>
                </v-flex>

                <v-flex xs6>
                    <v-select v-model="primary_color" :items="colors" label="主题色"></v-select>
                </v-flex>

                <v-flex xs12>
                    <v-btn :color="primary_color_kebab || this.$store.state.primary_color" @click="createProject" dark>创建</v-btn>

                </v-flex>
            </v-layout>
            <v-snackbar v-model="snackbar" :color="snackbar_color" top right>{{message}}</v-snackbar>
        </v-container>
    </v-form>
</template>
<script>
    import colors from 'vuetify/es5/util/colors'

    export default {
        name: 'project-create',

        data: () => ({
            valid: true,
            visible: "1",
            name: '',
            nameRules: [
                v => !!v || '项目名称为必填项',
                v => (v && v.length <= 64) || '项目名称不能超过64位'
            ],
            summary: '',
            summaryRules: [
                v => (v.length <= 256) || '项目简介不能超过256位'
            ],
            primary_color: 'red',
            message: '',
            snackbar: false,
            snackbar_color: 'red'
        }),
        computed: {
            colors() {
                return Object.keys(colors);
            },
            primary_color_kebab() {
                return this.primary_color.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            }
        },
        methods: {
            createProject() {
                if (!this.$refs.form.validate()) {
                    return false;
                }
                let project = {
                    name: this.name,
                    summary: this.summary,
                    primary_color: this.primary_color_kebab,
                    visible: this.visible,
                    creator: this.$store.state.auth.user.id
                };
                this.$store.dispatch('projects/createProject', project)
                    .then(() => {
                        this.message = '创建成功';
                        this.snackbar_color = 'success';
                        this.snackbar = true;
                    })
                    .catch((err) =>{
                        this.message = '系统出错';
                        this.snackbar = true;
                    });
            }
        },
    }
</script>
