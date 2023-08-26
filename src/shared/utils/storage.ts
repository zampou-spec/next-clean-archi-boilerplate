const storagePrefix = '__vamos__';

interface AccountData {
  // Spécifiez les propriétés de votre objet account avec leurs types corrects
  // Par exemple : id: string; name: string; email: string;
  // Assurez-vous de définir les propriétés selon votre cas d'utilisation
  // Cette interface doit refléter la structure de l'objet stocké dans le local storage
}

export const storage = {
  // ressources token
  getIdToken: () => JSON.parse(window.localStorage.getItem(`${storagePrefix}id_token`) as string),
  setIdToken: (idToken: string) => {
    window.localStorage.setItem(`${storagePrefix}id_token`, JSON.stringify(idToken));
  },
  clearIdToken: () => {
    window.localStorage.removeItem(`${storagePrefix}id_token`);
  },
  // auth token
  getAccessToken: () => JSON.parse(window.localStorage.getItem(`${storagePrefix}access_token`) as string),
  setAccessToken: (accessToken: string) => {
    window.localStorage.setItem(`${storagePrefix}access_token`, JSON.stringify(accessToken));
  },
  clearAccessToken: () => {
    window.localStorage.removeItem(`${storagePrefix}access_token`);
  },
  // account
  getAccount: () => JSON.parse(window.localStorage.getItem(`${storagePrefix}account`) as string) as AccountData,
  setAccount: (account: AccountData) => {
    window.localStorage.setItem(`${storagePrefix}account`, JSON.stringify(account));
  },
  clearAccount: () => {
    window.localStorage.removeItem(`${storagePrefix}account`);
  }
};
