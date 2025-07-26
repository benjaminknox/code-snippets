# Install all of the components directly using this command (make sure you are in the minikube cluster context):
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.18.2/cert-manager.yaml

# Let it install and verify if you want to:
kubectl get pods --namespace cert-manager
