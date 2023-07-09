import { Configuration, OpenAIApi } from "./node_modules/openai";
const Key_Api = "sk-...7Kp0";
const configuration = new Configuration({
  organization: "org-WqnKO5dedZFmKnRLARjzCwXX",
  apiKey: Key_Api,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
