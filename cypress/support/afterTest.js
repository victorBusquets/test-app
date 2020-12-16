import addContext from 'mochawesome/addContext'

Cypress.on('test:after:run', (test, runnable) => {
    console.log('Cypress.spec.name', Cypress.spec.name);
    addContext({ test }, {title: "Video test", value: `./videos/${Cypress.spec.name}.mp4`})
})