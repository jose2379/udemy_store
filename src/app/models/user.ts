type Role = 'admin' | 'simple';
export class User {
    uid?: string;
    email?: string;
    photoUrl?: string;
    displayName?: string;
    role?: Role;
}
