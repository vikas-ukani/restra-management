// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    console.log('In API Request')
    let data = {
        "message": 'welcome to api test',
        persons: [
            {
                person: "vikas"
            },
            {
                person: "Ukani"
            }
        ]
    }
    console.log('Sending Data::', data);
    res.status(200).json(data)
}
