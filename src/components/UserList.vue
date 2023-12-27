<template>
  <table class="table-auto mx-auto my-10">
    <thead align="left">
      <th
        class="px-4 py-2"
        v-text="'Namn'"
      />
      <th
        class="px-4 py-2"
        v-text="'Date of Birth'"
      />
      <th
        class="px-4 py-2"
        v-text="'Age'"
      />
      <th
        class="px-4 py-2"
        v-text="'Profession'"
      />
      <th
        class="px-4 py-2"
        v-text="'Country'"
      />
      <th
        class="px-4 py-2"
        v-text="'Favorite Quote'"
      />
      <th
        class="px-4 py-2"
        v-text="''"
      />
    </thead>
    <tbody>
      <tr
        v-for="(user, key) in users"
        :key="key"
      >
        <td
          class="border px-4 py-2"
          v-text="user.firstName + ' ' + user.lastName"
        />
        <td
          class="border px-4 py-2"
          v-text="user.birthDate"
        />
        <td
          class="border px-4 py-2"
          v-text="userAge(user)"
        />
        <td
          class="border px-4 py-2"
          v-text="professionName(user)"
        />
        <td
          class="border px-4 py-2"
          v-text="countryName(user)"
        />
        <td
          class="border px-4 py-2"
          v-text="user.quote"
        />
        <td
          class="px-4 py-2"
        >
          <button-component
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            :on-click="() => removeRow(user)"
            :button-text="'Remove'"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import User from './User';
import { mapState, mapActions } from 'vuex'
import ButtonComponent from './Button';

export default {
  name: 'UserList',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      selected: []
    };
  },
  computed: {
    ...mapState({
        users: state => state.userModule.users,
        professions: state => state.professionModule.professions,
        countries: state => state.countryModule.countries
    }),
  },
  methods: {
    ...mapActions([
      'removeUser',
    ]),
    removeRow(user) {
      this.removeUser(user);
    },
    // returns age as int
    userAge(user) {
      const todaysDate = Date.now();
      const birthDateInMilliseconds = (new Date(user.birthDate)).getTime();
      const age = (new Date(todaysDate)).getUTCFullYear() - (new Date(birthDateInMilliseconds)).getUTCFullYear();
      return age;
    },
    professionName(user) {
      let index = this.professions.findIndex(profession => profession.value === Number.parseInt(user.profession_id));
      if(index === -1) { index = 0; }
      return this.professions[index].text;
    },
    countryName(user) {
      let index = this.countries.findIndex(country => country.value === Number.parseInt(user.country_id));
      if(index === -1) { index = 0; }
      return this.countries[index].text;
    }
  },
}
</script>