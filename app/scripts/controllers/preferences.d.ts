export type AccountIdentityEntry = {
  address: string;
  name: string;
};

export type PreferencesControllerState = {
  identities: { [address: string]: AccountIdentityEntry };
};

export type PreferencesController = {
  store: {
    getState: () => PreferencesControllerState;
    subscribe: (callback: (state: PreferencesControllerState) => void) => void;
  };
};