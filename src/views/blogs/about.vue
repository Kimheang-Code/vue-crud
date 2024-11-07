<template>
    <v-container>
        <v-text-field clearable label="Label" variant="underlined"></v-text-field>
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