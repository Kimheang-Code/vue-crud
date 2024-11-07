<template>
    <v-container>
        <v-card>
            <v-row>
                <v-col cols="12">
                    <v-text-field label="Amount" model-value="10.00" prefix="$"></v-text-field>
                </v-col>
            </v-row>
        </v-card>
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