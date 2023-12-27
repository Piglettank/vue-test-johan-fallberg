<template>
  <form class="md:w-8/12 mx-auto my-10">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          v-text="'First Name'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Enter First Name"
          v-model="user.firstName"
        >
        <p class="block bg-red-200 text-s pb-2 pr-3 pl-3 pt-2 mb-5" v-if="errorMessages.firstName">{{ errorMessages.firstName }}</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
          v-text="'Last Name'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-last-name"
          type="text"
          placeholder="Enter Last Name"
          v-model="user.lastName"
        >
        <p class="block bg-red-200 text-s pb-2 pr-3 pl-3 pt-2 mb-5" v-if="errorMessages.lastName">{{ errorMessages.lastName }}</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-date"
          v-text="'Date of Birth'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-date"
          type="date"
          v-model="user.birthDate"
        >
        <p class="block bg-red-200 text-s pb-2 pr-3 pl-3 pt-2 mb-5" v-if="errorMessages.birthDate">{{ errorMessages.birthDate }}</p>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-quote"
          v-text="'Favorite Quote'"
        />
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-quote"
          type="text"
          placeholder="Enter Quote"
          v-model="user.quote"
        >
        <p class="block bg-red-200 text-s pb-2 pr-3 pl-3 pt-2 mb-5" v-if="errorMessages.quote">{{ errorMessages.quote }}</p>
      </div>
      <drop-down
        :options="professions"
        :changeSelect="selectProfession"
        label="Profession"
      />
      <drop-down
        :options="countries"
        :changeSelect="selectCountry"
        label="Country"
      />
    </div>
    <button-component
      :on-click="addNewUser"
      :button-text="'Save User'"
    />
  </form>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import DropDown from './DropDown';
import ButtonComponent from './Button';

export default {
  name: 'AddUser',
  data() {
    return {
      errorMessages: {
        firstName: "",
        lastName: "",
        birthDate: "",
        quote: "",
      },
      user: this.emptyUser(),
    };
  },
  components: {
    DropDown,
    ButtonComponent,
  },
  computed: {
    ...mapState({
      professions: state => state.professionModule.professions,
      countries: state => state.countryModule.countries
    }),
  },
  methods: {
    ...mapMutations({
      setProfession: 'SET_PROFESSION',
      setCountry: 'SET_COUNTRY',
    }),
    ...mapActions([
      'addUser',
    ]),
    addNewUser() {
      if(this.validate()) {
        this.addUser(this.user);
        this.user = this.emptyUser();
      }
    },
    selectProfession(professionsValue) {
      this.user.profession_id = professionsValue;
    },
    selectCountry(countryValue) {
      this.user.country_id = countryValue;
    },
    emptyUser() {
      return {
        firstName: '',
        lastName: '',
        birthDate: null,
        quote: '',
        profession_id: 1,
        country_id: 1,
      }
    },
    // Ensures all required fields are filled in. Returns true if all necessary info is there
    validate() {
      let hasError = false;
      for(let entry of Object.entries(this.user)) {
        if(!entry[1] || entry[1].length < 1) {
          this.errorMessages[entry[0]] = "Please fill in the information above";
          hasError = true;
        }
        else {
          this.errorMessages[entry[0]] = "";
        }
      }
      return !hasError;
    }
  },
}
</script>

<style scoped>
</style>