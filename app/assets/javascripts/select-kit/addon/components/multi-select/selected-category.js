import SelectedNameComponent from "select-kit/components/selected-name";
import { categoryBadgeHTML } from "discourse/helpers/category-link";
import { computed } from "@ember/object";
import layout from "select-kit/templates/components/multi-select/selected-category";

export default SelectedNameComponent.extend({
  classNames: ["selected-category"],
  layout,

  badge: computed("item", function() {
    return categoryBadgeHTML(this.item, {
      allowUncategorized: true,
      link: false
    }).htmlSafe();
  })
});
