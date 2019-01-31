<template>
    <v-app id="inspire">
        <v-content v-if="!this.$store.state.auth.user_is_login">
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>登陆</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-text-field @keyup.enter="login" ref="email" v-model="email" prepend-icon="person" name="email" label="邮箱" type="email" :rules="emailRules"></v-text-field>
                                    <v-text-field @keyup.enter="login" ref="password" v-model="password" prepend-icon="lock" name="password" label="密码" type="password" :rules="passwordRules"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="login">登陆</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
    export default {
        name: 'login',
        created() {
            if (this.$store.state.auth.user_is_login) {
                this.$store.dispatch('showSnackbar', {show: true, text: '您已登陆', color: 'warning'});
                this.$router.push({name: 'home'})
            }
        },
        data: () => ({
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || '邮箱不能为空',
                v => /.+@.+/.test(v) || '邮箱地址有误'
            ],
            passwordRules: [
                v => !!v || '密码不能为空',
                v => (v && v.length >= 6) || '密码不能少于6位'
            ],
        }),
        methods: {
            login() {
                if (!this.$refs.form.validate()) {
                    return false;
                }
                this.$store.dispatch('auth/login', {'email':this.email, 'password':this.password})
                    .then(response => {
                        if (response.errors) {
                            let error_message = response.errors.email[0] || response.errors.password[0];
                            this.$store.dispatch('showSnackbar', {show: true, text: error_message, color:'error'});
                            return false;
                        } else {
                            this.$store.dispatch('showSnackbar', {show: true, text: '登陆成功', color: 'success'});
                            this.$router.push({name:'home'});
                        }
                    });
            }
        }
    }
</script>
