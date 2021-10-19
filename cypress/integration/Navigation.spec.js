describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("http://localhost:3002/");
    cy.contains('Browse SpaceX Launches').click()
    
  });
});


describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("http://localhost:3002/");
    cy.contains('Browse SpaceX Launch Pads').click()
    
  });
});

