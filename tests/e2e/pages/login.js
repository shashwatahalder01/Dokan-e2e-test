const { createUser } = require("@wordpress/e2e-test-utils")
const base = require("../pages/base.js")
const data = require('../utils/testData.js')
const selector = require("../pages/selectors.js")


module.exports = {

    // User Login
    async login(user) {
        await this.loginFrontend(user)
    },

    // User Logout
    async logout() {
        await this.logoutFrontend()
    },

    // Login from Frontend
    async loginFrontend(user) {
        await base.goIfBlank(data.subUrls.frontend.myAccount)
        let currentUser = await base.getCurrentUser()
        // Skip If User Is Already Loggedin 
        if (user.username === currentUser) {
            return
        }
        // Logout If Other User Is Already Loggedin
        else if ((user.username !== currentUser) && (currentUser !== undefined)) {
            await this.logoutFrontend()
        }
        // Login User
        await base.clearAndType(selector.frontend.username, user.username)
        await base.clearAndType(selector.frontend.userPassword, user.password)
        await base.clickAndWait(selector.frontend.logIn)

        let loggedInUser = await base.getCurrentUser()
        expect(loggedInUser).toBe(user.username)
    },

    // Logout from Frontend
    async logoutFrontend() {
        await base.goIfNotThere(data.subUrls.frontend.myAccount)
        await base.clickAndWait(selector.frontend.customerLogout)

        let loggedInUser = await base.getCurrentUser()
        expect(loggedInUser).toBeUndefined()
    },

    // Login User Form Wp Login Dashboard
    async loginBackend(user) {
        await base.goIfNotThere(data.subUrls.backend.login)
        let emailField = await base.isVisible(selector.backend.email)
        if (emailField) {
            await base.clearAndType(selector.backend.email, user.username)
            await base.clearAndType(selector.backend.password, user.password)
            await base.clickAndWait(selector.backend.login)

            let loggedInUser = await base.getCurrentUser()
            expect(loggedInUser).toBe(user.username)
        }
    },

    // Admin Login
    async adminLogin(user) { //TODO: update this method according to fronted login
        await base.goIfNotThere(data.subUrls.backend.adminLogin)
        let emailField = await base.isVisible(selector.backend.email)
        if (emailField) {
            await base.clearAndType(selector.backend.email, user.username)
            await base.clearAndType(selector.backend.password, user.password)
            await base.clickAndWait(selector.backend.login)

            let loggedInUser = await base.getCurrentUser()
            expect(loggedInUser).toBe(user.username)
        }
    },

    // Admin Logout
    async adminLogout() {
        await base.hover(selector.backend.userMenu)
        await base.clickAndWait(selector.backend.logout)

        let loggedInUser = await base.getCurrentUser()
        expect(loggedInUser).toBeUndefined()
    },

    // Switch User
    async switchUser(user) {
        let currentUser = await base.getCurrentUser()
        if (currentUser !== user.username) {
            await this.loginBackend(user)
        }
    },

    // Create User
    async createUser(username, userDetails) {
        let password = createUser(username, userDetails)
        return password
    },
}