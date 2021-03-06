class UI {
    constructor(){

        this.profile = document.getElementById('profile');

    }

    // Show Profile Method
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="Github user avatar" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
                </div>
                <div class="col-md-9 ">
                    <span class="p-3 badge badge-warning">Public Repos: ${user.public_repos}</span>
                    <span class="p-3 badge badge-light">Public Gists: ${user.public_gists}</span>
                    <span class="p-3 badge badge-success">Followers: ${user.followers}</span>
                    <span class="p-3 badge badge-info">Following: ${user.following}</span>
                    <br></br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos:</h3>
        <div id="repos"></div>`;
        
    }
    // Show Repos Method
    showRepos(repos){
        let output = '';

        repos.forEach( repo => {
            output +=`
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6"><a target="_blank" href="${repo.html_url}">${repo.name}</a></div>
                    <div class="col-md-6">
                        <span class="p-3 badge badge-warning">Stars: ${repo.stargazers_count}</span>
                        <span class="p-3 badge badge-light">Watchers: ${repo.watchers_count}</span>
                        <span class="p-3 badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>`
        })

        document.getElementById('repos').innerHTML = output
    }

    // Show Alert Message
    showAlert(message, className){
        // Clear Previous alert
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add Class
        div.className = className;
        //Add Text
        div.appendChild(document.createTextNode(message));
        // Get Parent Container
        const container = document.querySelector('.searchContainer');
        // Get Search Box
        const search = document.querySelector('.search');
        // Insert alert above search bar
        container.insertBefore(div, search);
        // Clear After 3 seconds
        setTimeout(() =>{
            this.clearAlert();
        }, 2000)
    }

    // Clear Alert Method
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    // Clear Profile Method
    clearProfile(){
        this.profile.innerHTML = '';

    }
}