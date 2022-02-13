class basePage{
visitURL(URL)
{
    return cy.visit(URL)
}
clickButton(locator)
{
    return cy.get(locator).click()
}
getElement(locator)
{
    return cy.get(locator)
}
addtext(locator, text)
{
    return cy.get(locator).type(text)
}
select(locator, text)
{
    return cy.get(locator).select(text)
}
wait(mills)
{
    return cy.wait(mills)
}
check(locator)
{
    return cy.get(locator).check()
}
uncheck(locator)
{
    return cy.get(locator).uncheck()
}
removeTab(locator)
{
    return cy.get(locator).invoke('removeAttr', 'target').click()
}
}
export default basePage;