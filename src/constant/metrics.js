module.exports = Object.freeze({
  QUERY: {
		NODE: {
			CPU: 'avg(avg by (instance) (rate(node_cpu_seconds_total{mode!="idle"}[1m])))',
			NETWORK: 'avg(avg by (instance) (rate(node_network_transmit_bytes_total[5m])))',
			READ: 'avg(avg(rate(node_disk_read_bytes_total[30s])) by (instance))',
			WRITE: 'avg(avg(rate(node_disk_written_bytes_total[30s])) by (instance))'
		},
		SERVICE: {
			CPU: 'avg(label_replace(rate(container_cpu_usage_seconds_total{name!~".*prometheus.*", image!="",container!~"", namespace="sock-shop"}[5m]), "pod_set", "$1", "container", "(.+)")) by (pod_set)',
			NETWORK: 'avg(label_replace(label_replace(rate(container_network_transmit_bytes_total{pod!~"", namespace="sock-shop"}[1m]), "pod_set", "$1", "pod", "(.*)-.{16}"), "pod_set", "$1", "pod", "(.*)-.{15}")) by (pod_set)',
			NUM_PODS: 'count(label_replace(label_replace(rate(container_network_transmit_bytes_total{pod!~"", namespace="sock-shop"}[1m]), "pod_set", "$1", "pod", "(.*)-.{16}"), "pod_set", "$1", "pod", "(.*)-.{15}")) by (pod_set)',
			REQUEST_RATE: 'sum(label_replace(rate(request_duration_seconds_bucket{kubernetes_namespace="sock-shop", route!="health", route!="metrics"}[30s]), "pod_set", "$1", "kubernetes_name", "(.+)")) by (pod_set)'
		}
	}
});