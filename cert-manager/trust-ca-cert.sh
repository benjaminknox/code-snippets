# You'll need to trust this certificate in your OS, then your browser will show any cert it generates to be valid
kubectl get secret selfsigned-ca-secret -n cert-manager -o jsonpath='{.data.ca\.crt}' | base64 -d > selfsigned-ca
