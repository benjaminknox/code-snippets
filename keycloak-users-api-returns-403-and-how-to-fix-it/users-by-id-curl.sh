ACCESS_TOKEN=$(curl -s '<PLACE YOUR KEYCLOAK HOST HERE>/realms/403-forbidden-fix/protocol/openid-connect/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=client_credentials' \
  -d 'client_id=403-forbidden-fix-client' \
  -d 'client_secret=<PLACE KEYCLOAK CLIENT SECRET HERE>' | grep -o '"access_token":"[^"]*' | sed 's/"access_token":"//')

curl '<PLACE YOUR KEYCLOAK HOST HERE>/admin/realms/403-forbidden-fix/users/<PLACE YOUR USER ID HERE>' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
