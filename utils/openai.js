import axios from 'axios'

const GPT3_API_KEY = process.env.OA_API_KEY

const ask = (symptom) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: 'I am a qualified doctor, I need to narrow down on some symptoms'
        },
        {
          role: 'assistant',
          content: `I have a patient who has ${symptom}`
        },
        {
          role: 'user',
          content: 'Using 160 characters, what could be the issue?'
        }
      ],
      temperature: 1,
      top_p: 1,
      n: 1,
      stream: false,
      max_tokens: 250,
      presence_penalty: 0,
      frequency_penalty: 0
    })

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${GPT3_API_KEY}`
      },
      data
    }

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))
        resolve({ status: 'success', message: response.data.choices[0].message.content })
      })
      .catch((error) => {
      // console.log(error)
      // reject(error)
        resolve({ status: 'error', message: error })
      })
  })
}

export default ask
