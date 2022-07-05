
const endpoints = {
    getCards: 'https://app-server-cards.herokuapp.com/cards'
}

export async function getCards() {
    try {
        const response = await fetch(endpoints.getCards, {
            method: 'GET',
            redirect: 'follow',
        })
        if (response?.ok) {
            return response.json()
        }

    } catch (error) {
        console.log('error', error)
    }

}




