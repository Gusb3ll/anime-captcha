<script lang="ts">
  import { onMount } from "svelte";

  import { type PlayResult, getAllResults } from "$lib/storage";
  import History from "$sections/History.svelte";
  import Statistics from "$sections/Statistic.svelte";

  let allPlay: PlayResult[] = [];

  onMount(() => {
    allPlay = getAllResults();
  });
</script>

<Statistics {allPlay} />
<History {allPlay} />
