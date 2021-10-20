
describe("Navigation", () => {
  it("should visit Lauche Pads when clicking", () => {
    cy.visit("http://localhost:3002/");
    cy.contains('Browse SpaceX Launch Pads').click()
    
  });
});

