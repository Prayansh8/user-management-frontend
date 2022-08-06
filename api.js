console.log("Hello api js");

let apiHostname = "https://user-mgmtmg.herokuapp.com"
if (window.location.hostname === 'localhost') {
    apiHostname = 'http://localhost:3000';
}

// user singup

async function signUpRequest(firstName, lastName, email, gender, password) {

    try {
        const res = await fetch(`${apiHostname}/api/sign-up`, {

            method: "POST",

            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                gender: gender,
                password: password,
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        if (res.status < 400) {
            window.alert("Signup success");
            window.location = "signin.html";
        } else {
            const data = await res.json();
            window.alert(data.detail);
        }

    } catch (error) {
        window.alert(`Filed to make a succesful signup request : ${error}`);
        console.error(error);
    }
}

// // user singin

async function signInRequest(email, password) {
    try {
        const res = await fetch(`${apiHostname}/api/sign-in`, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
        })

        if (res.status < 400) {
            window.alert("Login success");
        } else {
            const data = await res.json();
            window.alert(data.detail);
        }
    } catch (error) {
        window.alert(`Filed to make a succesful login request : ${error}`);
        console.error(error);
    }
}