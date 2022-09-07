const { createUser } = require("@wordpress/e2e-test-utils")
const base = require("../pages/base.js")
const data = require('../utils/testData.js')
const selector = require("../pages/selectors.js")


module.exports = {

    // user login
    async login(user) {
        await this.loginFrontend(user)
    },

    // login from frontend
    async loginFrontend(user) {
        await base.goIfBlank(data.subUrls.frontend.myAccount)
        let currentUser = await base.getCurrentUser()
        if (user.username === currentUser) { // skip if user is already loggedin 
            return
        } else if ((user.username !== currentUser) && (currentUser !== undefined)) { // logout if other user is already loggedin
            await this.logoutFrontend()
        }
        //login user
        await base.clearAndType(selector.frontend.username, user.username)
        await base.clearAndType(selector.frontend.userPassword, user.password)
        await base.clickAndWait(selector.frontend.logIn)

        let loggedInUser = await base.getCurrentUser()
        expect(loggedInUser).toBe(user.username)
    },

    // logout from frontend
    async logoutFrontend() {
        await base.goIfNotThere(data.subUrls.frontend.myAccount)
        await base.clickAndWait(selector.frontend.customerLogout)

        let loggedInUser = await base.getCurrentUser()
        expect(loggedInUser).toBeUndefined()
    },

    // login user form WP login dashboard
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

    // admin login
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

    // switcher user
    async switchUser(user) {
        let currentUser = await base.getCurrentUser()
        if (currentUser !== user.username) {
            await this.loginBackend(user)
        }
    },

    //create user
    async createUser(username, userDetails) {
        let password = createUser(username, userDetails)
        return password
    },

    // //TODO: delete this not necessary
    // async checkUserExists(user) {
    //     await base.goIfNotThere(data.subUrls.backend.login)
    //     let emailField = await base.isVisible(selector.backend.email)
    //     if (emailField) {
    //         await base.clearAndType(selector.backend.email, user.username)
    //         await base.clearAndType(selector.backend.password, user.password)
    //         await base.clickAndWait(selector.backend.login)
    //     }
    //     let loginError = await base.isVisible(selector.backend.loginError)
    //     if (loginError) {
    //         let errorMessage = await base.getElementText(selector.backend.loginError)
    //         expect(errorMessage).toMatch(`Error: The username ${user.username} is not registered on this site. If you are unsure of your username, try your email address instead.`)
    //         return false
    //     }
    //     return true
    // }
}