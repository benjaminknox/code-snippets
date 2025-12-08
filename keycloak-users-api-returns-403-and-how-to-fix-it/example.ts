export const getUserById = (userId: string, accessToken: string) =>
	fetch(`${process.env.KEYCLOAK_HOST}/admin/realms/users/${userId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	});
