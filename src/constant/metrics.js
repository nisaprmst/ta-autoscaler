module.exports = Object.freeze({
  QUERY: {
		NODE: {
			CPU: 'avg(avg by (instance) (rate(node_cpu_seconds_total{mode!="idle"}[1m])))',
			NETWORK: 'avg(avg by (instance) (rate(node_network_transmit_bytes_total[30s])))',
			READ: 'avg(avg(rate(node_disk_read_bytes_total[30s])) by (instance))',
			WRITE: 'avg(avg(rate(node_disk_written_bytes_total[30s])) by (instance))'
		},
		SERVICE: {
			CPU: 'avg(label_replace(rate(container_cpu_usage_seconds_total{name!~".*prometheus.*", image!="",container!~"", namespace="sock-shop"}[1m]), "pod_set", "$1", "container", "(.+)")) by (pod_set)',
			NETWORK: 'avg(label_replace(label_replace(rate(container_network_transmit_bytes_total{pod!~"", namespace="sock-shop"}[1m]), "pod_set", "$1", "pod", "(.*)-.{16}"), "pod_set", "$1", "pod", "(.*)-.{15}")) by (pod_set)',
			NUM_PODS: 'kube_deployment_status_replicas{namespace="sock-shop"}',
			REQUEST_RATE: 'sum(rate(request_duration_seconds_count{kubernetes_namespace="sock-shop", route!="metrics", route!="health"}[30s])) by (kubernetes_name)'
		},
		RESPONSE_TIME: {
			ORDERS: 'avg(rate(request_duration_seconds_bucket{kubernetes_namespace="sock-shop", route!="health", route!="metrics", name="orders", route!~".*error", status_code!="500", status_code!="406"}[30s])) by (name, route, method)',
			CARTS: 'avg(rate(request_duration_seconds_bucket{kubernetes_namespace="sock-shop", route!="health", route!="metrics", name="carts", route!~".*html", status_code!="500", status_code!="406", status_code!="201", method!="POST", route!~".*merge.*", route!~".*/items.*"}[30s])) by (name, route, method)',
			SHIPPING: 'avg(rate(request_duration_seconds_bucket{kubernetes_namespace="sock-shop", route!="health", route!="metrics", name="shipping", route!~".*html", status_code!="500", status_code!="406"}[30s])) by (name, route, method)',
			PAYMENT: 'avg(rate(request_duration_seconds_bucket{kubernetes_namespace="sock-shop", route!="health", route!="metrics", name="payment", route!~".*html", status_code!="500", status_code!="406"}[30s])) by (name, route, method)',
			USER: 'avg(rate(request_duration_seconds_bucket{kubernetes_namespace="sock-shop", route!="health", route!="metrics", name="user", route!~".*html", status_code!="500", status_code!="406", route!~".*login.*", method!="DELETE"}[30s])) by (name, route, method)',
			FRONTEND: 'avg(rate(request_duration_seconds_bucket{kubernetes_namespace="sock-shop", route!="health", route!="metrics", name="front-end", route!~".*html", status_code!="500", status_code!="406", method!="delete", route!~".*catalogue", route!~".*login", route!~".*cart"}[30s])) by (name, route, method)'
		}
	}
});