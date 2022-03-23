import Page from "./page";

class LoginPage extends Page {
    get inputUsername() {
        return $("#user-name");
    }
    get inputPassword() {
        return $("#password");
    }
    get btnSubmit() {
        return $("#login-button");
    }
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open(path) {
        return super.open(path);
    }
}
export default new LoginPage();
