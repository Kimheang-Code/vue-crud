<template>
    <v-container>
        <h1>Welcome to the Home Page</h1>
        <v-btn color="primary" @click="goToAbout">Go to About Page</v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        goToAbout() {
            this.$router.push('/about');
        }
    }
};
</script>