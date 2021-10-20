describe("Navigation", () => {
  it("should visit Lauches when clicking", () => {
    cy.visit("http://localhost:3002/");
    cy.contains('Browse SpaceX Launches').click()
    
  });
});
