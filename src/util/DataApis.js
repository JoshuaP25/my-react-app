const clientId = 'OEZ0VNYVAYT1YUFX1V0JTK3ANWBHYZA55OTTK4VPUQPEOAXQ';
const clientSecret = 'XPXWJ1Y20ZTZKWPBQW0WETKNF0OOOYHFHA2EIOWLKXL1RBMT';
require('dotenv').config()

const FourSquare = {

    search(term) {
        return fetch(`https://api.foursquare.com/v2/venues/explore?near=${term}&limit=5&client_id=${clientId}&client_secret=${clientSecret}&v=20211020`)
            .then(response => response.json()
            ).then(jsonResponse => {
                if(!jsonResponse.response) {
                    return [];
                }

                return jsonResponse.response.groups[0].items.map(item => ({
                        id: item.venue.id,
                        name: item.venue.name,
                        address: item.venue.location.address,
                        city: item.venue.location.city,
                        country: item.venue.location.country,
                        prefix: item.venue.categories[0].icon.prefix,
                        suffix: item.venue.categories[0].icon.suffix
                }));
            })
    }
}

export default FourSquare;