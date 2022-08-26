function  getCluster() {
        const formdata = new FormData();
        formdata.append("key", "02c7859d55e7fbcec2bf678e22d442c7");
        formdata.append("lang", "en");
        formdata.append("txt", "Shoe can be ware\n Shoe can water flower\n Shoe is collection \n We use shoe to create artwork\n Apple can be eaten\n Apple is a brand");

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.meaningcloud.com/clustering-1.1", requestOptions)
            .then(response => response.json())
            .then(data => {
                // const propertyValues = Object.entries(data);
                // console.log(propertyValues);
                const status1 = data.status
                const cluster_list = data.cluster_list
                console.log(status1);
                console.log(cluster_list);
                this.setState({
                    data: cluster_list
                });
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
        return null;
    }

async function keyword_extraction() {
        var data = "Shoe can be ware\n Shoe can water flower\n Shoe is collection \n We use shoe to create artwork\n Apple can be eaten\n Apple is a brand";
        const { Configuration, OpenAIApi } = require("openai");
        var a = "sk-WgwjBWBRVNtB0pDy"
        var b = "J8NqT3BlbkFJ1FVvBIL51g5KA1TVVwNk"
        const configuration = new Configuration({
            apiKey: a + b,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: "Extract keywords from this text:\n\n" + data,
            temperature: 0.3,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.8,
            presence_penalty: 0.0,
        });
        var result = response.data.choices[0].text.slice(2)
        console.log("keywords:" + result)
        return new Promise((res, rej) => { res(result) })
    }