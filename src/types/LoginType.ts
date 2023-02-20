type LoginTypes = {
    refresh ?:string,
    access ?: string,
}

export const LoginType : LoginTypes = {
    refresh : 'refresh-token',
    access : 'access-token'
}