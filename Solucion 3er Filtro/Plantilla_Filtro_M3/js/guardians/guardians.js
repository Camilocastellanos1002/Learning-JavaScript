(
    ()=>{
        const user = localStorage.getItem("company");
        if (!user) {
            window.location.href="index.html"
        }
    }
)()