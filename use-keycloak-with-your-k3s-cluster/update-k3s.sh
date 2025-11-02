# Replace your keycloak domain, your realm, and your client id.

curl -sfL https://get.k3s.io | sh -s - server \
  --kube-apiserver-arg=oidc-issuer-url=https://<your keycloak domain>/realms/<your realm> \
  --kube-apiserver-arg=oidc-client-id=<your client id> \
  --kube-apiserver-arg=oidc-username-claim=preferred_username \
  --kube-apiserver-arg=oidc-groups-claim=groups \
  --kube-apiserver-arg=oidc-username-prefix=oidc: \
  --kube-apiserver-arg=oidc-groups-prefix=oidc:
