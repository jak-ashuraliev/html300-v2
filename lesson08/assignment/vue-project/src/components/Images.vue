<template>
  <!-- Container -->
  <b-container class="images">
    <h2 class="pt-5 display-4 text-muted">{{ header }}</h2>
    <p class="lead mb-4 text-muted">{{ subtitle }}</p>
    <b-row>
      <!-- ImgCard component pulled from its own file and using props for all attributes -->
      <ImgCard
        v-for="(imgList, index) in images"
        :key="index"
        :imgList="imgList"
        :src="imgList.url"
        :alt="imgList.alt"
        :title="imgList.title"
        :text="imgList.text"
        :btn_text="imgList.btn_text"
        :last_update="imgList.last_update"
      />
    </b-row>
  </b-container>
  <!-- Container End -->
</template>

<!-- All content is from variables in the <script> section of the .vue file. -->
<script>
// ImgCard component imported from its own component
import ImgCard from "../components/ImgCard";

export default {
  name: "Images",
  // add ImgCard component so it can be used in the template
  components: { ImgCard },
  data() {
    return {
      header: "Images / Cards",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Eos repudiandae officiis dolores perspiciatis pariatur culpa.",
      images: [
        {
          title: "Title One",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          btn_text: "Toggle Image Border",
          url:
            "https://images.unsplash.com/photo-1586170737458-fc02f1212f59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
          last_update: "Last updated 1 mins ago",
        },
        {
          title: "Title Two",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          btn_text: "Toggle Image Border",
          url:
            "https://images.unsplash.com/photo-1578671815798-7b9b0ab22d73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
          last_update: "Last updated 2 mins ago",
        },
        {
          title: "Title Three",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          btn_text: "Toggle Image Border",
          url:
            "https://images.unsplash.com/photo-1559583071-b0d249d0fcd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
          last_update: "Last updated 3 mins ago",
        },
        {
          title: "Title Four",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          btn_text: "Toggle Image Border",
          url:
            "https://images.unsplash.com/photo-1585951237313-1979e4df7385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
          last_update: "Last updated 4 mins ago",
        },
        {
          title: "Title Five",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          btn_text: "Toggle Image Border",
          url:
            "https://images.unsplash.com/photo-1561227414-a7cd2130328c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
          last_update: "Last updated 5 mins ago",
        },
        {
          title: "Title Six",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          btn_text: "Toggle Image Border",
          url:
            "https://images.unsplash.com/photo-1586598663540-51cab4d20862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80",
          alt: "Image description",
          last_update: "Last updated 6 mins ago",
        },
      ],
    };
  },
};
</script>

<!--Styling with scss -->
<style scoped lang="scss">
.images {
  margin-top: 3.75rem;
}
</style>

