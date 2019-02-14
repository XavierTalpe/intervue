<template>
    <v-container
        fluid>
        <v-layout
            align-center>
            <h1 class="headline mr-3">
                Persons
            </h1>
        </v-layout>

        <v-layout>
            <v-list>
                <v-list-tile
                    v-for="(person) in personsSortedByName"
                    :key="person.id">
                    <v-list-tile-title>{{ person.name }}</v-list-tile-title>
                    <v-list-tile-action>
                        <v-btn
                            icon
                            ripple
                            @click="edit(person.id)">
                            <v-icon color="grey lighten-1">
                                edit
                            </v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-layout>


        <v-dialog
            v-model="flags.showEditDialog"
            lazy
            persistent
            scrollable
            width="500px">
            <Edit
                v-if="personToEdit"
                :person="personToEdit"
                @cancel="flags.showEditDialog = false ; personToEdit = null"
                @submit="flags.showEditDialog = false ; personToEdit = null" />
        </v-dialog>
    </v-container>
</template>

<script>
import Edit from '../components/Edit.vue'

export default {

    components: {
        Edit
    },

    data() {
        return {
            personToEdit: null,

            flags: {
                showEditDialog: false
            }
        }
    },

    computed: {
        persons() {
            return this.$store.getters.persons
        },

        personsSortedByName() {
            return Array.from(this.persons).sort((a, b) => a.name.localeCompare(b.name, undefined, {sensitivity: 'base'}))
        }
    },

    created() {
        this.$store.dispatch('initialize')
    },

    methods: {
        edit(personId) {
            const person = this.persons.find(person => person.id === personId)

            this.personToEdit = person
            this.flags.showEditDialog = true
        }
    }

}
</script>
