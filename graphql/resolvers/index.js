const resolvers = {
    Query : {
        artists : () => ([
            {
                name: "Shawn Mendes",
                popularity: 95,
                type: "Artist",
                id: "1"
            },
            {
                name: "Vicente Fernandez",
                popularity: 98,
                type: "Artist",
                id: "2"
            },
            {
                name: "Pedro Fernandez",
                popularity: 97,
                type: "Artist",
                id: "3"
            }
        ])
    }
};

export default resolvers;