const { Configuration, OpenAIApi } = require("openai");

async function summarization(data){
    var a = "sk-WgwjBWBRVNtB0pDy"
    var b = "J8NqT3BlbkFJ1FVvBIL51g5KA1TVVwNk"
    const configuration = new Configuration({
        apiKey: a+b,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: data + "\n\nTl;dr",
        temperature: 0.7,
        max_tokens: 10,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    result = response.data.choices[0].text.slice(2);
    return new Promise((res, rej) => {res(result)})
}

module.exports = summarization;