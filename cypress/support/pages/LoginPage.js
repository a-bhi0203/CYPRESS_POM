import basePage from "../base/basePage"
const username_locator = '#text'
const login_nav_locator = '#login-portal'
const base = new basePage()
class LoginPage{
    navigatetologin()
    {
        return base.removeTab(login_nav_locator)
    }
    username()
    {
        return base.addtext(username_locator, "webdriver").should("be.enabled").and("have.value", "webdriver")
    }
}
export default LoginPage