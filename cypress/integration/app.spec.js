describe("e2e tests", () => {
  it("find page title", () => {
    cy.visit("https://zemoga-ui-test-jmcdl.vercel.app/");
    cy.findByRole("heading", { name: /rule of thumb\./i });
  });
});
