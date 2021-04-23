import * as admin from 'firebase-admin';

export const getAdmin = (): admin.app.App => {
  if (admin.apps.length > 0) {
    return admin.apps[0] as admin.app.App;
  } else {
    const app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        // see: https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
        privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY as string).replace(/\\n/g, "\n"),
      }),
      databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    });
    return app;
  }
}

export const verifyIdToken = (idToken: string): Promise<admin.auth.DecodedIdToken> => {
  return getAdmin().auth().verifyIdToken(idToken);
}
