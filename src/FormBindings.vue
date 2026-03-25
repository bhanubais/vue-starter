<script setup>
import { ref } from "vue";

const text = ref("Edit me");
const checked = ref(true);
const checkNames = ref(["Jack"]);
const picked = ref("One");
const selected = ref("A");
const multiSelect = ref(["B"]);
</script>

<template>
  <h2>Text Input</h2>
  <input type="text" v-model="text">
  <p>{{ text }}</p>
  <hr>

  <h2>Checkbox</h2>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">Checked: {{ checked }}</label>
  <hr>

  <h2>Multi Checkbox</h2>
  <input type="checkbox" id="Jack" value="Jack" v-model="checkNames">
  <label for="Jack">Jack</label>
  <input type="checkbox" id="John" value="John" v-model="checkNames">
  <label for="John">John</label>
  <input type="checkbox" id="Mike" value="Mike" v-model="checkNames">
  <label for="Mike">Mike</label>
  <p>Check names: {{ checkNames }}</p>
  <br>

  <h2>Radio</h2>
  <input type="radio" id="radioOne" value="One" v-model="picked">
  <label for="radioOne">One</label>
  <input type="radio" id="radioTwo" value="Two" v-model="picked">
  <label for="radioTwo">Two</label>
  <p>Picked: {{ picked }}</p>
  <hr>

  <h2>Select</h2>
  <select v-model="selected">
    <option disabled>Please select one</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
  </select>
  <p>Selected: {{ selected }}</p>
  <hr>

  <h2>Multi Select</h2>
  <select v-model="multiSelect" multiple>
    <option disabled>Please select one</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
  </select>
  <p>Selected: {{ multiSelect }}</p>
  <hr>

</template>

<style scoped>

</style>
