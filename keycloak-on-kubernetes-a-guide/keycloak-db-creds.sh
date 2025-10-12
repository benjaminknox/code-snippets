kubectl create secret generic keycloak-db-creds \
  --from-literal=user='<your-database-username>' \
  --from-literal=password='<your-database-password>'
