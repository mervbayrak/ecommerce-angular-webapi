

// It can be used in case of authentication implementation.
export class LocalStorageUtils {
  static get isAuthenticated(): boolean {
    return !!LocalStorageUtils.LoggedUserData;
  }

  static get LoggedUserData(): any {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch (e) {
      return null;
    }
  }

  static set LoggedUserData(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  static get token(): any {
    try {
      return localStorage.getItem('token');
    } catch (e) {
      return null;
    }
  }

  static set token(data: any) {
    localStorage.setItem('token', data);
  }

  static RemoveUser() {
    localStorage.removeItem('user');
  }
}
