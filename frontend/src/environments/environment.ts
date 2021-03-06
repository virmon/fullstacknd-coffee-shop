export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    // if I use virmon.auth0.com, the url will be virmon.auth0.com.auth0.com
    url: 'virmon', // the auth0 domain prefix
    audience: 'coffee', // the audience set for the auth0 app
    clientId: 'q09sqtFwa0sv0VsBnfiNW9Kxp4uoLLOX', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
