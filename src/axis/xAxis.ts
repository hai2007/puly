export default (config) => {

    let text = []
    if (config.value) {

        let dist = 1 / Math.ceil(config.value.length / 2)
        for (let index = 0; index < config.value.length; index++) {
            text.push({
                type: "text",
                color: "white",
                content: config.value[index],
                x: (index - (config.value.length - 1) * 0.5) * dist,
                y: 0,
                z: 0.1,
                d: "z"
            })
        }
    }

    return [{
        data: {
            length: 2,
            methods: "Line",
            points: [-1.3, 0, 0, 0, 0, 1, 1.3, 0, 0, 0, 0, 1]
        },
        color: [1, 0, 0, 1]
    }, {
        data: {
            length: 6,
            methods: "FanTriangle",
            points: [
                1.3, 0, 0, 0, 0, 1,
                1.25, 0.02, 0.02, 0, 0, 1,
                1.25, -0.02, 0.02, 0, 0, 1,
                1.25, -0.02, -0.02, 0, 0, 1,
                1.25, 0.02, -0.02, 0, 0, 1,
                1.25, 0.02, 0.02, 0, 0, 1,
            ]
        },
        color: [1, 0, 0, 1]
    }, ...text]
}
