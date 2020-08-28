import I18n from "I18n";
import discourseComputed from "discourse-common/utils/decorators";
const { isEmpty } = Ember;
import SelectKitFilterComponent from "select-kit/components/select-kit/select-kit-filter";
import layout from "select-kit/templates/components/select-kit/select-kit-filter";

export default SelectKitFilterComponent.extend({
  layout,
  classNames: ["multi-select-filter"],

  @discourseComputed("placeholder", "selectKit.hasSelection")
  computedPlaceholder(placeholder, hasSelection) {
    if (hasSelection) return "";
    return isEmpty(placeholder) ? "" : I18n.t(placeholder);
  }
});
