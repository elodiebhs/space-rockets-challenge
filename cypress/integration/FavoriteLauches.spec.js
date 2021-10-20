describe("Favorites", () => {
  it("should visit Lauches when clicking on Browse SpaceX Launches", () => {
    cy.visit("http://localhost:3002/");
    cy.contains('Browse SpaceX Launches').click()
    
  });

  //User can click on add/delete button to add item to favorite

  it("should add a launche to favorites when clicking on star button",()=>{
    //click on first add/delete button
    cy.get('.css-16bb1cy').first().click()
    //open favorite drawer
    cy.contains('Open Favorites').click()
    //close drawer click on the cross
    cy.get('.css-1dedo85').click()
  })

  //User can click on add/delete button to delete item from favorite drawer

  it("should delete lauches to favorites when clicking on star button",()=>{
    //click on add/delete button
    cy.get('.css-16bb1cy').first().click()
    //open drawer - drawer is now empty
    cy.contains('Open Favorites').click()
    //close drawer click on the cross
    cy.get('.css-1dedo85').click()
  })

  //User can click on an item in favorite drawer and it will bring them to the item details

  it("should bring me to lauch item when clicking on it in favorite drawer",()=>{
     //click on first add/delete button
     cy.get('.css-16bb1cy').first().click()
     //open favorite drawer
     cy.contains('Open Favorites').click()
    cy.get('.css-izgg77').first().click()
  })


//From item details, user can click on add/delete button and it will add/delete item from favorite drawer

it("should add/delete lauch item from favorite when clicking on it in favorite drawer",()=>{
  //click on add/delete button in item details
  cy.get('.css-16bb1cy').first().click()
  //go to lauches
  cy.contains('Launches').click()
  //open favorites drawer
  cy.contains('Open Favorites').click()
})

});
