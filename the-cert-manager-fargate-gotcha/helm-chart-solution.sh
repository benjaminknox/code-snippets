# Save to cert-manager-values.yaml
webhook:
  securePort: 10260

# Helm command:
helm upgrade --install cert-manager \
  oci://quay.io/jetstack/charts/cert-manager \
  --namespace cert-manager --create-namespace \
  --version v1.20.2 \
  -f cert-manager-values.yaml
