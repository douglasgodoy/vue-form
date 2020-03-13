<script>
import Main from "@/components/Main.vue";
import List from "./views/List";

const NotFound = { template: "<p>Página não encontrada</p>" };
const routes = {
  "/": Main,
  "/list": List
};

export default {
  data() {
    return {
      currentRoute: window.location.pathname
    };
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
};
</script>

<style>
</style>
