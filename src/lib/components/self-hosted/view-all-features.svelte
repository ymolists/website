<script>
  import { selfHostedComparison } from "$lib/contents/self-hosted";

  import SectionCommon from "../section-common.svelte";
  import FeatureTable from "../ui-library/feature-table/feature-table.svelte";
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
  <FeatureTable slot="content" tableData={selfHostedComparison} />
</SectionCommon>
