<template>
    <v-container>
        <h1>About Page</h1>
        <v-btn color="primary" @click="goToHome">Back to Home</v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'AboutPage',
    methods: {
        goToHome() {
            this.$router.push('/');
        }
    }
};
</script>