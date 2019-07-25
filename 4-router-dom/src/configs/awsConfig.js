export default {
  cognito: {
    REGION: "ap-northeast-2",
    USER_POOL_ID: "ap-northeast-2_ZbkTpzqnZ",
    USER_POOL_WEB_CLIENT_ID: "t2trq6hneqk490tbi44e37mqb",
    IDENTITY_POOL_ID: 'ap-northeast-2:fd496b60-a940-46ca-ac22-fed01b634ae1',
	  MANDATORY_SIGN_IN: true,
  },
	storage: {
		BUCKET: 'macrogen.sanger.result',
		REGION: "ap-northeast-2",
	},
	apiGateway: {
    REGION: "ap-northeast-2",
    URL: "https://yjj6yicln2.execute-api.ap-northeast-2.amazonaws.com/dev",
    //URL: "http://localhost:3000",
  }
};
