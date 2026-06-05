curl -fsSL https://github.com/cert-manager/cert-manager/releases/download/v1.20.2/cert-manager.yaml \
  | sed -e 's/--secure-port=10250/--secure-port=10260/' \
        -e 's/containerPort: 10250/containerPort: 10260/' \
  | kubectl apply -f -
