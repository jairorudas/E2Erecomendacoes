describe('Teste Home recomendação', () => {
    it('Visita pagina', () => {
        cy.visit('https://www.usereserva.com/home-recomendacao?email=rodrigo.berutti@hotmail.com')
    })
})

describe('Verifica numero de carousels existentes', () => {
    it('Numero de carousels existentes debe ser igual ou maior que 3', () => {
        context('Slides', () => {
            expect(cy.get('.swiper-container .swiper-wrapper')).to.exist;
            cy.get('.swiper-container .swiper-wrapper').as('containers')
            expect('@containers').to.be.ok
            expect('@containers'.length).to.be.greaterThan(3)
            cy.screenshot('carousels', {log: true})
        })
    })
})

describe('Teste dos itens em cada Carousel', () => {
    it('Numero de itens no carousel deve ser igual ou maior que 8', () => {
        context('Items Slides', () => {
            cy.get('.swiper-container .swiper-wrapper').each(($li, index, $lis) => {
            let $itens =  $li.find('.swiper-slide').length;
            expect($itens).to.be.greaterThan(8)
            cy.screenshot('item', {log: true})
            })
        })
    })
})

describe('Teste clicks no carousels', () => {
    it('Click em cada um dos carousels', () => {
        //cy.get('window').scrollTo(700)
        cy.get('#ultimos').scrollIntoView({ duration: 2000, offset: {top: 150, left: 0} })
        cy.get('.mz-slider--wrapper .mz-bgSlider-next').then(($el) => {
            let n = 0;
            while (n < 3) {
                $el.click()
                cy.wait(800) 
                n += 1
            }
        })
    })
})