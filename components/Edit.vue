<template>
    <v-card>
        <v-card-title>
            <h1 class="headline">
                Edit
            </h1>
        </v-card-title>

        <v-divider />

        <v-card-text>
            <v-form
                @submit.prevent="submit">
                <v-text-field
                    id="name"
                    v-model="person.name"
                    name="name"
                    autofocus
                    required />
            </v-form>
        </v-card-text>

        <v-divider />

        <v-card-actions>
            <v-spacer />
            <v-btn
                id="cancel"
                flat
                @click="cancel">
                Cancel
            </v-btn>
            <v-btn
                id="submit"
                type="submit"
                @click="submit">
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {

    props: {
        person: {
            type: Object,
            required: true
        }
    },

    methods: {

        cancel() {
            this.$emit('cancel')
        },

        submit() {
            // TODO: Implement the code to save this person to the Vuex store (using a mutation)


            this.$emit('submit', this.person)
        }
    }
}
</script>
