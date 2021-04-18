import * as admin from 'firebase-admin';
import serviceAccount from '../config/service-account.json';

export const getAdmin = (): admin.app.App => {
  if (admin.apps.length > 0) {
    return admin.apps[0] as admin.app.App;
  } else {
    const app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
      databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    });
    return app;
  }
}

export const verifyIdToken = (idToken: string): Promise<admin.auth.DecodedIdToken> => {
  return getAdmin().auth().verifyIdToken(idToken);
}
