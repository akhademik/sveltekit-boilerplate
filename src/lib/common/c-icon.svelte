<script lang="ts">
  import { ICONS } from '$assets/utils/icons';
  export let name: keyof typeof ICONS;

  $: selected_icon = ICONS[name];
  $: width = selected_icon.box_width;
  $: height = selected_icon.box_height;
</script>

<svg
  class={$$props.class}
  viewBox="0 0 {width} {height || width}">{@html selected_icon.svg}</svg>
