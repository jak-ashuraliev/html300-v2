<template>
  <b-col xs="12" md="6" lg="4">
    <b-card-group>
      <!-- Boostrap Card and Binding props -->
      <b-card
        deck
        :title="imgList.title"
        :img-src="imgList.url"
        :img-alt="imgList.alt"
        img-top
        tag="article"
        class="mb-4"
        :class="{ active: showBorder }"
      >
        <b-card-text>{{ imgList.text }}</b-card-text>
        <!-- add click event to a button -->
        <b-button @click="toggleBorder()" href="#" variant="primary">{{ imgList.btn_text }}</b-button>
        <template v-slot:footer>
          <small class="text-muted">{{ imgList.last_update }}</small>
        </template>
      </b-card>
    </b-card-group>
  </b-col>
</template>

<!-- Receiving props / object to be used in the template above -->
<script>
// import mixin
import { imageBorderMixin } from "../mixins/mixin.js";

export default {
  // mixin imageBorderMixin
  mixins: [imageBorderMixin],
  name: "img-card",
  // props and validation
  props: {
    imgList: {
      type: Object,
      requred: true,
    },
    title: {
      type: String,
      required: true,
      default: "Default Title",
    },
    text: {
      type: String,
      required: true,
      default: "Some default text",
    },
    btn_text: {
      type: String,
      default: "Disabled",
    },
    ulr: {
      type: String,
    },
    alt: {
      type: String,
      required: true,
      default: "Description of the image",
    },
    last_update: {
      type: String,
      required: true,
      default: "Last updated time unknown.",
    },
  },
};
</script>

<style lang="scss" scoped>
// set bootstarp border to 2px.
.card {
  border: 2px solid rgba(0, 0, 0, 0.125);
}
// on click / toggle event, add border to the card
.active {
  border: 2px solid #777;
}
</style>