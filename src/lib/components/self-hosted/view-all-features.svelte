<script>
  import SectionCommon from "../section-common.svelte";
  import ComparisonTable from "../tables/comparison-table.svelte";
  import { tableData } from "$lib/contents/self-hosted";
</script>

<SectionCommon
  title="View all features"
  text="Install Gitpod Self-hosted on 
	  <a href='/docs/self-hosted/latest/installation/on-gke'>GKE</a>, 
	  <a href='/docs/self-hosted/latest/installation/on-amazon-eks'>EKS</a>, 
	  <a href='/docs/self-hosted/latest/installation/on-microsoft-aks'>AKS</a> or 
	  <a href='/docs/self-hosted/latest/installation/on-kubernetes'>K3s</a>."
  textClassNames="mb-xx-small"
>
  <ComparisonTable {tableData} slot="content" />
</SectionCommon>
