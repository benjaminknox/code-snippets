$ cmctl renew  <certificate name>

error: failed to trigger issuance of Certificate <namespace>/<certificate nam>:
Internal error occurred: failed calling webhook "webhook.cert-manager.io":
failed to call webhook: Post "https://cert-manager-webhook.cert-manager.svc:443/validate?timeout=30s":
tls: failed to verify certificate:x509:
certificate is valid for fargate-ip-172-21-110-185.us-west-2.compute.internal,
ip-172-21-110-185.us-west-2.compute.internal,  not cert-manager-webhook.cert-manager.svc
