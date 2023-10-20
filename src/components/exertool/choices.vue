<template>
  <v-card-text>
    <div v-katex class="radio-group">
      <p>
        <b>{{ num }}. </b> {{ content }}
      </p>

      <input class="radio-input" :name="'S' + num" :id="'S' + num + 'A'" type="radio" />
      <label class="radio-label" :for="'S' + num + 'A'">
        <span class="radio-inner-circle"></span>
        <b>A.</b> {{ A }}
      </label>

      <input class="radio-input" :name="'S' + num" :id="'S' + num + 'B'" type="radio" />
      <label class="radio-label" :for="'S' + num + 'B'">
        <span class="radio-inner-circle"></span>
        <b>B.</b> {{ B }}
      </label>

      <input class="radio-input" :name="'S' + num" :id="'S' + num + 'C'" type="radio" />
      <label class="radio-label" :for="'S' + num + 'C'">
        <span class="radio-inner-circle"></span>
        <b>C.</b> {{ C }}
      </label>

      <input class="radio-input" :name="'S' + num" :id="'S' + num + 'D'" type="radio" />
      <label class="radio-label" :for="'S' + num + 'D'">
        <span class="radio-inner-circle"></span>
        <b>D.</b> {{ D }}
      </label>
    </div>
  </v-card-text>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["num", "content", "A", "B", "C", "D", "answer"],
  data() {},
});
</script>

<style scoped>
p {
  font-family: "Times New Roman", sans-serif;
  font-size: 20px;
  line-height: 1.6;
  margin: 1em 0;
  text-align: justify;
}

.radio-group {
  display: flex;
  flex-direction: column;
}

.radio-label {
  display: flex;
  align-items: center;
  padding: 0.5em;
  margin-bottom: 0.5em;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.2s, border-color 0.2s;
}

.radio-label:hover {
  background-color: #e6e6e6;
}

.radio-input {
  position: absolute;
  opacity: 0;
}

.radio-input:checked + .radio-label {
  background-color: #b7e4f1;
  border-color: #5189ef;
}

.radio-input:focus + .radio-label {
  outline: 2px solid #5672d8;
}

.radio-inner-circle {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid #888;
  border-radius: 50%;
  margin-right: 0.5em;
  transition: border-color 0.2s;
  position: relative;
}

.radio-label:hover .radio-inner-circle {
  border-color: #555;
}

.radio-input:checked + .radio-label .radio-inner-circle {
  border-color: #5fb1e7;
}

.radio-input:checked + .radio-label .radio-inner-circle::after {
  content: "";
  display: block;
  width: 0.5em;
  height: 0.5em;
  background-color: #2ac0f1;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
